interface Pixel {
  red: number
  green: number
  blue: number
  alpha: number
  position: number
}

export class RGBAAccessor {
  pixelsArray: Uint8ClampedArray
  pixels: number
  pixelParams = 4

  constructor(arr: Uint8ClampedArray) {
    if (arr.length % 4 !== 0) {
      throw new Error('Массив должен быть кратен 4')
    }

    this.pixels = arr.length / 4
    this.pixelsArray = arr
  }

  setPixel(pixel: Pixel) {
    this.pixelsArray[this.#getRedIndex(pixel.position)] = pixel.red
    this.pixelsArray[this.#getGreenIndex(pixel.position)] = pixel.green
    this.pixelsArray[this.#getBlueIndex(pixel.position)] = pixel.blue
    this.pixelsArray[this.#getAlphaIndex(pixel.position)] = pixel.alpha
  }

  getPixel(pixelPosition: number) {
    return {
      red: this.pixelsArray[this.#getRedIndex(pixelPosition)],
      green: this.pixelsArray[this.#getGreenIndex(pixelPosition)],
      blue: this.pixelsArray[this.#getBlueIndex(pixelPosition)],
      alpha: this.pixelsArray[this.#getAlphaIndex(pixelPosition)],
      position: pixelPosition,
    }
  }

  [Symbol.iterator]() {
    return {
      matrix: this,
      current: 0,
      last: this.pixels,
      next() {
        if (this.current !== this.last) {
          return {
            value: this.matrix.getPixel(this.current++),
            done: false,
          }
        }
        return {
          done: true,
        }
      },
    }
  }

  #getRedIndex(pixelPosition: number) {
    return pixelPosition * this.pixelParams
  }
  #getGreenIndex(pixelPosition: number) {
    return pixelPosition * this.pixelParams + 1
  }
  #getBlueIndex(pixelPosition: number) {
    return pixelPosition * this.pixelParams + 2
  }
  #getAlphaIndex(pixelPosition: number) {
    return pixelPosition * this.pixelParams + 3
  }
}
