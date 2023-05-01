import { pages } from '@pages'

import '@/style.scss'

console.log(pages)
const list = document.querySelector('ol')

pages.forEach((page) => {
  const li = document.createElement('li')
  const link = document.createElement('a')
  link.setAttribute('href', page)
  link.innerHTML = page
  li.append(link)
  list?.append(li)
})
