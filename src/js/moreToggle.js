export default function moreToggle() {
  let brandsList = document.querySelector('.brands__list')
  let button = document.getElementsByClassName('button-more')
  let buttonArrow = document.querySelectorAll('.button-more__arrow')
  let buttonText = document.getElementsByClassName('button-more__content')[1]

  button[1].addEventListener('click', () => {
    if (buttonText.textContent === 'Показать все') {
      arrowOpenRotate()
      brandsList.classList.remove('brands__list--hidden')
    } else {
      arrowCloseRotate()
      brandsList.classList.add('brands__list--hidden')
      brandsList.scrollTo(0, 0)
    }
  })

  function arrowCloseRotate() {
    window.setTimeout(function () {
      buttonText.textContent = 'Показать все'
      buttonArrow.classList.remove('button__arrow--rotate')
    }, 100)
  }

  function arrowOpenRotate() {
    window.setTimeout(function () {
      buttonText.textContent = 'Скрыть'
      buttonArrow.classList.add('button__arrow--rotate')
    }, 200)
  }
}

moreToggle()
