import './style.css'
import { series, Serie } from './data'

function onClick(serie : Serie) {
    const img = document.getElementById('card-img')! as HTMLImageElement
    const name = document.getElementById('card-name')!
    const desc = document.getElementById('card-desc')!
    const link = document.getElementById('card-link')!

    img.src = serie.image
    name.innerHTML = serie.name
    desc.innerHTML = serie.description
    link.setAttribute('href', serie.link)

    const card = document.getElementById('card')!
    card.classList.remove('d-none')
}

series.forEach(serie => {
  const parent = document.createElement('tr')

  const tagNames = ['th', 'td', 'td', 'td']

  tagNames.map(tagName => document.createElement(tagName)).forEach((element, index) => {

    if (index === 1) {
      element.innerHTML = `<a href="#">${serie.name}</a>`
      element.addEventListener('click', () => onClick(serie))
    } else {
      element.innerText = Object.values(serie)[index]
    }
    parent.appendChild(element)
  })

  document.getElementById("tbody")!.appendChild(parent)
})

