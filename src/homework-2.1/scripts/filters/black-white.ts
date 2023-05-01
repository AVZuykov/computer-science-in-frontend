import { RGBAAccessor } from '../utils'

export function blackWhite(rgbaArray: Uint8ClampedArray) {
  const rgbaAccessor = new RGBAAccessor(rgbaArray)

  for (const pixel of rgbaAccessor) {
    if (pixel) {
      const blackOrWhite =
        Math.round(0.2126 * pixel.red + 0.7152 * pixel.green + 0.0722 * pixel.blue) > 127 ? 0b1111_1111 : 0b0000_0000

      rgbaAccessor.setPixel({
        ...pixel,
        red: blackOrWhite,
        green: blackOrWhite,
        blue: blackOrWhite,
      })
    }
  }
}
