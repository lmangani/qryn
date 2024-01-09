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
	return fg, nil
}

func createTree(iter *pprofIter) (*tree, error) {
	res := &tree{
		namesMap: map[string]int32{"total": 0},
		names:    []string{"total"},
		root: &treeNode{
			nameIdx:  0,
			total:    0,
			self:     0,
			children: nil,
		},
	}
	for iter.Next() {
		processPProf(iter.At(), res)
	}
	return res, nil
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
				node.children = append(node.children, &treeNode{
					nameIdx:  nameIdx,
					total:    0,
					self:     0,
					children: nil,
				})
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
	refs := []*treeNode{t.root}
	var nodesTable [][]*treeNode
	validRefs := true
	for validRefs {
		nodesTable = append(nodesTable, refs)
		var _refs []*treeNode
		for _, r := range refs {
			if r.children == nil || r.nameIdx == -1 {
				_refs = append(_refs, &treeNode{nameIdx: -1, total: r.total, self: 0, children: nil})
			} else {
				_refs = append(_refs, r.children...)
			}
		}
		refs = _refs
		validRefs = false
		for _, r := range refs {
			if r.nameIdx != -1 {
				validRefs = true
				break
			}
		}
	}
	for i := range nodesTable {
		for j := len(nodesTable[i]) - 2; j >= 0; j-- {
			if nodesTable[i][j].nameIdx == -1 && nodesTable[i][j+1].nameIdx == -1 {
				total := nodesTable[i][j].total
				copy(nodesTable[i][j:], nodesTable[i][j+1:])
				nodesTable[i][j].total += total
				nodesTable[i] = nodesTable[i][:len(nodesTable[i])-1]
			}
		}
	}
	res := make([][]int64, len(nodesTable))
	for i, row := range nodesTable {
		var _row []int64
		for j, n := range row {
			if n.nameIdx == -1 {
				continue
			}
			prepend := int64(0)
			if j > 0 && nodesTable[i][j-1].nameIdx == -1 {
				prepend = nodesTable[i][j-1].total
			}
			_row = append(_row, prepend, n.total, n.self, int64(n.nameIdx))
		}
		res[i] = _row
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
