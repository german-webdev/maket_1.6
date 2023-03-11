export default function readMore() {
  let textBox = document.querySelector('.about__text-box')
  let button = document.getElementsByClassName('button-more')[0];
  let buttonArrow = document.getElementsByClassName('button-more__arrow')[0];
  let buttonText = document.getElementsByClassName('button-more__content')[0];

  button.addEventListener('click', () => {
    if (buttonText.textContent === 'Читать далее') {
      arrowOpenRotate();
      textBox.classList.remove('about__text-box--hidden');
    } else {
      arrowCloseRotate()
      textBox.classList.add('about__text-box--hidden');
      textBox.scrollTo(0, 0);
    }
  })

  function arrowCloseRotate() {
    window.setTimeout(function () {
      buttonText.textContent = 'Читать далее'
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

readMore();
