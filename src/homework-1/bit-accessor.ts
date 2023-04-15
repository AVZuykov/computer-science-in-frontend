import { Bit, BitAccessor, UintArray } from './types'
import { validate } from './utils'

export function createBitAccessor<T extends UintArray>(intArray: T): BitAccessor<T> {
  return {
    getBit(intIdx, bitPosition) {
      validate(intArray, intIdx, bitPosition)
      return ((intArray[intIdx] >> bitPosition) & 0b1) as Bit
    },

    setBit(intIdx, bitPosition, bit) {
      validate(intArray, intIdx, bitPosition)
      intArray[intIdx] = (
        bit ? intArray[intIdx] | (0b1 << bitPosition) : intArray[intIdx] & ~(0b1 << bitPosition)
      ) as Bit
    },

    getByte(intIdx) {
      validate(intArray, intIdx)
      return intArray[intIdx].toString(2).padStart(intArray.BYTES_PER_ELEMENT * 8, '0')
    },
  }
}
