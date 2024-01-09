package profiling

type FlameGraph struct {
	Names   []string
	Levels  [][]int64
	Total   int64
	MaxSelf int64
}

type tree struct {
	names    []string
	namesMap map[string]int32
	root     *treeNode
}

type treeNode struct {
	nameIdx  int32
	total    int64
	self     int64
	children []*treeNode
}
