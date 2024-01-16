package profiling

import (
	"github.com/google/pprof/profile"
)

func CreateFlameGraph(buf []byte) (*FlameGraph, error) {
	iter := pprofIter{Buf: buf}
	t, err := createTree(&iter)
	if err != nil {
		return nil, err
	}
	levels := bfs(t)
	fg := &FlameGraph{
		Names:   t.names,
		Levels:  levels,
		Total:   t.root.total,
		MaxSelf: dfsMaxSelf(t.root, t.root.self),
	}
	destroyTree(t.root)
	return fg, nil
}

func createTree(iter *pprofIter) (*tree, error) {
	res := &tree{
		namesMap: map[string]int32{"total": 0},
		names:    []string{"total"},
		root:     getTreeNode(0, 0, 0, nil),
	}
	for iter.Next() {
		processPProf(iter.At(), res)
	}
	return res, nil
}

var treeNodePool []treeNode = make([]treeNode, 100000)
var treeNodeIdxPool []*treeNode = (func() []*treeNode {
	res := make([]*treeNode, 100000)
	for i := 0; i < 100000; i++ {
		res[i] = &treeNodePool[i]
	}
	return res
})()

func getTreeNode(nameIdx int32, total int64, self int64, children []*treeNode) *treeNode {
	if len(treeNodeIdxPool) > 0 {
		res := treeNodeIdxPool[len(treeNodeIdxPool)-1]
		treeNodeIdxPool = treeNodeIdxPool[:len(treeNodeIdxPool)-1]
		res.nameIdx = nameIdx
		res.total = total
		res.self = self
		res.children = children
		return res
	}
	return nil
}

func putTreeNode(node *treeNode) {
	if len(treeNodeIdxPool) < 10000 {
		treeNodeIdxPool = append(treeNodeIdxPool, node)
	}
}

func processPProf(prof *profile.Profile, tree *tree) {
	for _, l := range prof.Location {
		if _, ok := tree.namesMap[l.Line[0].Function.Name]; !ok {
			tree.names = append(tree.names, l.Line[0].Function.Name)
			tree.namesMap[l.Line[0].Function.Name] = int32(len(tree.names) - 1)
		}
	}
	for _, s := range prof.Sample {
		node := tree.root
		for i := len(s.Location) - 1; i >= 0; i-- {
			nameIdx := tree.namesMap[s.Location[i].Line[0].Function.Name]
			nodeIdx := -1
			for i, c := range node.children {
				if c.nameIdx == nameIdx {
					nodeIdx = i
					break
				}
			}
			if nodeIdx == -1 {
				node.children = append(node.children, getTreeNode(nameIdx, 0, 0, nil))
				nodeIdx = len(node.children) - 1
			}
			node = node.children[nodeIdx]
			//TODO: choose value according to the requested sample type
			node.total += s.Value[0]
			if i == 0 {
				node.self += s.Value[0]
			}
		}
	}
	tree.root.total = 0
	for _, c := range tree.root.children {
		tree.root.total += c.total
	}
}

func bfs(t *tree) [][]int64 {
	refs := [][]*treeNode{
		make([]*treeNode, 0, 10000),
		make([]*treeNode, 0, 10000),
	}
	refs[0] = append(refs[0], t.root)
	validRefs := true
	var prepend int64 = 0
	putPrepend := func(v int64) {
		prepend += v
	}
	getPrepend := func() int64 {
		res := prepend
		prepend = 0
		return res
	}
	_res := make([]int64, 4000000)
	k := 0
	res := make([][]int64, 0, 100)
	res = append(res, []int64{0, t.root.total, t.root.self, int64(t.root.nameIdx)})
	for validRefs {
		_k := k
		validRefs = false
		refs[1] = refs[1][:0]
		prepend = 0
		for _, r := range refs[0] {
			putPrepend(r.prepend)
			for _, c := range r.children {
				validRefs = true
				c.prepend = getPrepend()
				_res[k] = c.prepend
				_res[k+1] = c.total
				_res[k+2] = c.self
				_res[k+3] = int64(c.nameIdx)
				k += 4
			}
			refs[1] = append(refs[1], r.children...)
			if r.children == nil {
				putPrepend(r.total)
			} else {
				putPrepend(r.self)
			}
		}
		res = append(res, _res[_k:k])
		refs[0], refs[1] = refs[1], refs[0]
	}
	return res
}

func dfsMaxSelf(node *treeNode, maxSelf int64) int64 {
	for _, c := range node.children {
		_maxSelf := dfsMaxSelf(c, maxSelf)
		if maxSelf < _maxSelf {
			maxSelf = _maxSelf
		}
	}
	return maxSelf
}

func destroyTree(t *treeNode) {
	for _, c := range t.children {
		destroyTree(c)
	}
	putTreeNode(t)
}
