import { createBitAccessor } from './bit-accessor'

export function homework_1() {
  const bitAccessor = createBitAccessor(
    new Uint8Array([0b0000_1100, 0b0000_1001, 0b1111_1111])
  )

  try {
    console.log(bitAccessor.getByte(0)) // 0000_1100

    console.log(bitAccessor.getBit(0, 0)) // 0
    bitAccessor.setBit(0, 0, 1)
    console.log(bitAccessor.getBit(0, 0)) // 1
    
    console.log(bitAccessor.getByte(0)) // 0000_1100
    console.log(bitAccessor.getByte(1)) // 0000_1001

    console.log(bitAccessor.getByte(3)) // Index 3 out of range intArray
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    }
  }
}
