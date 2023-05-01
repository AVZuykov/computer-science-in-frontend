import { RGBAAccessor } from '../utils'

export function grayscale(rgbaArray: Uint8ClampedArray) {
  const rgbaAccessor = new RGBAAccessor(rgbaArray)

  for (const pixel of rgbaAccessor) {
    if (pixel) {
      const gray = Math.round(0.2126 * pixel.red + 0.7152 * pixel.green + 0.0722 * pixel.blue)

      rgbaAccessor.setPixel({
        ...pixel,
        red: gray,
        green: gray,
        blue: gray,
      })
    }
  }
}
