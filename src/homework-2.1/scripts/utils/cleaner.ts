export function cleanCanvas(canvasArr: HTMLCanvasElement[]) {
  canvasArr.forEach((canvas) => canvas.getContext('2d')!.clearRect(0, 0, canvas.width, canvas.height))
}
