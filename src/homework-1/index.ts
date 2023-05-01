import { createBitAccessor } from './bit-accessor'

const accessor8Bit = createBitAccessor(new Uint8Array([0b0000_1100, 0b0000_1001, 0b1111_1111]))

console.log('\nUint8Array:\n')

try {
  console.log(accessor8Bit.getByte(0)) // 0000_1100

  console.log(accessor8Bit.getBit(0, 0)) // 0
  accessor8Bit.setBit(0, 0, 1)
  console.log(accessor8Bit.getBit(0, 0)) // 1

  console.log(accessor8Bit.getByte(0)) // 0000_1100
  console.log(accessor8Bit.getByte(1)) // 0000_1001

  console.log(accessor8Bit.getByte(3)) // Index 3 out of range intArray
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message)
  }
}

const accessor16Bit = createBitAccessor(new Uint16Array([0b0000_1100, 0b0000_1001, 0b1111_1111]))

console.log('\nUint16Array:\n')

try {
  console.log(accessor16Bit.getByte(0)) // 0000_1100

  console.log(accessor16Bit.getBit(0, 0)) // 0
  accessor16Bit.setBit(0, 0, 1)
  console.log(accessor16Bit.getBit(0, 0)) // 1

  console.log(accessor16Bit.getByte(0)) // 0000_1100
  console.log(accessor16Bit.getByte(1)) // 0000_1001

  console.log(accessor16Bit.getByte(3)) // Index 3 out of range intArray
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message)
  }
}

const accessor32Bit = createBitAccessor(new Uint32Array([0b0000_1100, 0b0000_1001, 0b1111_1111]))

console.log('\nUint32Array:\n')

try {
  console.log(accessor32Bit.getByte(0)) // 0000_1100

  console.log(accessor32Bit.getBit(0, 0)) // 0
  accessor32Bit.setBit(0, 0, 1)
  console.log(accessor32Bit.getBit(0, 0)) // 1

  console.log(accessor32Bit.getByte(0)) // 0000_1100
  console.log(accessor32Bit.getByte(1)) // 0000_1001

  console.log(accessor32Bit.getByte(3)) // Index 3 out of range intArray
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message)
  }
}
