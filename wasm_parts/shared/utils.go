package shared

func ReadULeb32(buf []byte) (uint32, uint32) {
	var res uint32
	i := uint32(0)
	for ; buf[i]&0x80 == 0x80; i++ {
		res |= uint32(buf[i]&0x7f) << (i * 7)
	}
	res |= uint32(buf[i]&0x7f) << (i * 7)
	//b.i += i + 1
	return res, i + 1
}
