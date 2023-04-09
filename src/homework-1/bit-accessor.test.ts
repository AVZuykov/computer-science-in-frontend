import { createBitAccessor } from './bit-accessor'

describe('Тестироваине bitAcessor', function () {
  it('Получение бита числа', () => {
    const bitAccessor = createBitAccessor(
      new Uint8Array([0b0000_1101, 0b0000_1001])
    )
    expect(bitAccessor.getBit(0, 2)).toBe(1)
    expect(bitAccessor.getBit(1, 1)).toBe(0)
    expect(bitAccessor.getBit(1, 3)).toBe(1)
  })
  it('Исключение при выходе за границы массива или байта', () => {
    const bitAccessor = createBitAccessor(
      new Uint8Array([0b0000_1101, 0b0000_1001])
    )
    expect(() => bitAccessor.getBit(2, 1)).toThrow()
    expect(() => bitAccessor.getBit(0, 8)).toThrow()
    expect(() => bitAccessor.getBit(0, -1)).toThrow()
  })
  it('Перезапись бита числа', () => {
    const bitAccessor = createBitAccessor(
      new Uint8Array([0b0000_1101, 0b0000_1001])
    )
    expect(bitAccessor.getBit(0, 0)).toBe(1)
    bitAccessor.setBit(0, 1, 0)
    expect(bitAccessor.getBit(0, 0)).toBe(1)

    expect(bitAccessor.getBit(0, 1)).toBe(0)
    bitAccessor.setBit(0, 1, 1)
    expect(bitAccessor.getBit(0, 1)).toBe(1)

    expect(bitAccessor.getBit(1, 1)).toBe(0)
    bitAccessor.setBit(1, 1, 1)
    expect(bitAccessor.getBit(1, 1)).toBe(1)
  })
  it('Получение байта числа в виде строки', () => {
    const bitAccessor = createBitAccessor(
      new Uint8Array([0b0000_1101, 0b0000_1001])
    )
    expect(bitAccessor.getByte(0)).toBe('00001101')
    expect(bitAccessor.getByte(1)).toBe('00001001')
  })
})
