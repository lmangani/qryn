package profiling

import (
	"github.com/google/pprof/profile"
	"wasm_parts/shared"
)

type pprofIter struct {
	Buf     []byte
	i       uint32
	current *profile.Profile
	err     error
}

func (p *pprofIter) Next() bool {
	if p.i >= uint32(len(p.Buf)) || p.err != nil {
		return false
	}
	size, i := shared.ReadULeb32(p.Buf[p.i:])
	p.i += i
	bCurrent := p.Buf[p.i : p.i+size]
	p.current, p.err = profile.ParseData(bCurrent)
	p.i += size
	return p.err == nil
}

func (p *pprofIter) At() *profile.Profile {
	return p.current
}
