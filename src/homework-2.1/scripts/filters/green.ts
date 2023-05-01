import { RGBAAccessor } from '../utils'

export function green(rgbaArray: Uint8ClampedArray) {
  const rgbaAccessor = new RGBAAccessor(rgbaArray)

  for (const pixel of rgbaAccessor) {
    if (pixel) {
      rgbaAccessor.setPixel({
        ...pixel,
        red: 0,
        green: pixel.green,
        blue: 0,
      })
    }
  }
}
