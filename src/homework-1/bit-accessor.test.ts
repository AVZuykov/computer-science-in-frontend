import { createBitAccessor } from './bit-accessor'

describe('Тестироваине 8-bit Acessor', function () {
  it('Получение бита числа', () => {
    const accessor8bit = createBitAccessor(new Uint8Array([0b0000_1101, 0b0000_1001]))
    expect(accessor8bit.getBit(0, 2)).toBe(1)
    expect(accessor8bit.getBit(1, 1)).toBe(0)
    expect(accessor8bit.getBit(1, 3)).toBe(1)
  })
  it('Исключение при выходе за границы массива или байта', () => {
    const accessor8bit = createBitAccessor(new Uint8Array([0b0000_1101, 0b0000_1001]))
    expect(() => accessor8bit.getBit(2, 1)).toThrow()
    expect(() => accessor8bit.getBit(0, 8)).toThrow()
    expect(() => accessor8bit.getBit(0, -1)).toThrow()
  })
  it('Перезапись бита числа', () => {
    const accessor8bit = createBitAccessor(new Uint8Array([0b0000_1101, 0b0000_1001]))
    expect(accessor8bit.getBit(0, 0)).toBe(1)
    accessor8bit.setBit(0, 1, 0)
    expect(accessor8bit.getBit(0, 0)).toBe(1)

    expect(accessor8bit.getBit(0, 1)).toBe(0)
    accessor8bit.setBit(0, 1, 1)
    expect(accessor8bit.getBit(0, 1)).toBe(1)

    expect(accessor8bit.getBit(1, 1)).toBe(0)
    accessor8bit.setBit(1, 1, 1)
    expect(accessor8bit.getBit(1, 1)).toBe(1)
  })
  it('Получение байта числа в виде строки', () => {
    const accessor8bit = createBitAccessor(new Uint8Array([0b0000_1101, 0b0000_1001]))
    expect(accessor8bit.getByte(0)).toBe('00001101')
    expect(accessor8bit.getByte(1)).toBe('00001001')
  })
})
