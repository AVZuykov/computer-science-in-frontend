import '../style.scss'

import defaultImg from '../assets/img.jpg'

import { HEIGHT, WIDTH } from './consts'
import { blackWhiteBtn, canvasChanged, canvasOriginal, grayscaleBtn, greenBtn, input, inverseBtn } from './elements'
import { blackWhite, FilterType, grayscale, green, inverse } from './filters'
import { calcDrawOptions, cleanCanvas } from './utils'

const canvasOriginalContext = canvasOriginal.getContext('2d')!
const canvasChangedContext = canvasChanged.getContext('2d')!

canvasChanged.width = canvasOriginal.width = WIDTH
canvasChanged.height = canvasOriginal.height = HEIGHT

input.addEventListener('change', handleFileSelect)

inverseBtn.addEventListener('click', () => {
  renderChange(inverse)
})

grayscaleBtn.addEventListener('click', () => {
  renderChange(grayscale)
})

greenBtn.addEventListener('click', () => {
  renderChange(green)
})

blackWhiteBtn.addEventListener('click', () => {
  renderChange(blackWhite)
})

renderOrigin({ url: defaultImg })

function handleFileSelect() {
  const file = input.files?.[0]

  if (!file) return

  const reader = new FileReader()
  reader.onload = function () {
    renderOrigin({ file })
  }
  reader.readAsArrayBuffer(file)
}

function renderOrigin(originImage: { file?: File; url?: string }) {
  const img = new Image()
  img.onload = function () {
    cleanCanvas([canvasOriginal])

    canvasOriginalContext.drawImage(...calcDrawOptions(img))

    renderChange()
  }
  if (originImage.file) {
    img.src = URL.createObjectURL(originImage.file)
  }
  if (originImage.url) {
    img.src = originImage.url
  }
}

function renderChange(filter?: FilterType) {
  const imageData = canvasOriginalContext.getImageData(0, 0, WIDTH, HEIGHT)
  if (filter) {
    filter(imageData.data)
  }
  canvasChangedContext.putImageData(imageData, 0, 0)
}
