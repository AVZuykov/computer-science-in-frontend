import { RGBAAccessor } from '../utils'

export function inverse(rgbaArray: Uint8ClampedArray) {
  const rgbaAccessor = new RGBAAccessor(rgbaArray)

  for (const pixel of rgbaAccessor) {
    if (pixel) {
      rgbaAccessor.setPixel({
        ...pixel,
        red: 0b1111_1111 ^ pixel.red,
        green: 0b1111_1111 ^ pixel.green,
        blue: 0b1111_1111 ^ pixel.blue,
      })
    }
  }
}
