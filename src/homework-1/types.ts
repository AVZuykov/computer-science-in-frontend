export type Bit = 0 | 1

export type UintArray = Uint8Array | Uint16Array | Uint32Array

export interface BitAccessor<T extends UintArray> {
  getBit: (intIdx: T[number], bitPosition: number) => Bit
  setBit: (intIdx: T[number], bitPosition: number, bit: Bit) => void
  getByte: (intIdx: T[number]) => string
}
