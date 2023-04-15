import { UintArray } from '../types'

export function validate<T extends UintArray>(intArray: T, intIdx: T[number], bitPosition?: number): void {
  const countBitInInt = intArray.BYTES_PER_ELEMENT * 8

  if (intArray.length === 0) {
    throw new Error('The intArray is empty')
  }

  if (intIdx >= intArray.length || intIdx < 0) {
    throw new Error(`Index ${intIdx} out of range intArray [${intArray}]`)
  }

  if (bitPosition !== undefined && (bitPosition < 0 || bitPosition > countBitInInt - 1)) {
    throw new Error(`Bit index ${bitPosition} for ${countBitInInt}-bit int out of range`)
  }
}
