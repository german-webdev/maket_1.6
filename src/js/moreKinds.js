export default function moreKinds() {
  let kindsList = document.querySelector('.kinds__list')
  let button = document.getElementsByClassName('button-more')[2];
  let buttonArrow = document.getElementsByClassName('button-more__arrow')[2];
  let buttonText = document.getElementsByClassName('button-more__content')[2];

  button.addEventListener('click', () => {
    if (buttonText.textContent === 'Показать все') {
      arrowOpenRotate();
      kindsList.classList.remove('kinds__list--hidden');
    } else {
      arrowCloseRotate()
      kindsList.classList.add('kinds__list--hidden');
      kindsList.scrollTo(0, 0);
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

moreKinds();
