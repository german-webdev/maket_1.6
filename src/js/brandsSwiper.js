// модуль"brandsSwiper.js"

export default function brandsSwiper() {
  let brandsSwiper = document.querySelector('.brands__grid');
  let init = false;

  return () => {
    if (window.innerWidth <= 767) {
      if (!init) {
        init = true;
        brandsSwiper = new Swiper('.brands__grid', {
          direction: 'horizontal',
          width: 320,
          // spaceBetween: 16,
          slidesPerView: 1.25,
          speed: 300,
          cssMode: true,

          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      }
    } else if (init) {
      brandsSwiper.destroy();
      init = false;
    }
  }
}

brandsSwiper();

window.addEventListener('resize', brandsSwiper());
window.addEventListener('load', brandsSwiper());
