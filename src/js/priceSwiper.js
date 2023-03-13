// модуль"priceSwiper.js"


export default function priceSwiper() {
  let priceSwiper = document.querySelector('.price__grid');

  let init = false;

  return () => {
    if (window.innerWidth <= 767) {
      if (!init) {
        init = true;
        priceSwiper = new Swiper('.price__grid', {
          direction: 'horizontal',
          width: 320,
          spaceBetween: 16,
          slidesPerView: 1.215,
          speed: 300,
          cssMode: true,

          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      }
    } else if (init) {
      priceSwiper.destroy();
      init = false;
    }
  }
}

priceSwiper();

window.addEventListener('resize', priceSwiper());
window.addEventListener('load', priceSwiper());
