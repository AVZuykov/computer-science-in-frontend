import { HEIGHT, WIDTH } from '../consts'

type DrawOptions = [HTMLImageElement, number, number, number, number]
interface ImageSizePosition {
  width: number
  height: number
  xOffset: number
  yOffset: number
}

export function calcDrawOptions(img: HTMLImageElement): DrawOptions {
  const isHorizontal = img.width / img.height > 2
  const imageOptions: ImageSizePosition = {
    width: WIDTH,
    height: HEIGHT,
    xOffset: 0,
    yOffset: 0,
  }
  if (isHorizontal) {
    imageOptions.height = img.height * (WIDTH / img.width)
    imageOptions.yOffset = (HEIGHT - img.height * (WIDTH / img.width)) / 2
  } else {
    imageOptions.width = img.width * (HEIGHT / img.height)
    imageOptions.xOffset = (WIDTH - img.width * (HEIGHT / img.height)) / 2
  }
  return [img, imageOptions.xOffset, imageOptions.yOffset, imageOptions.width, imageOptions.height]
}
