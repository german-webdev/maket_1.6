// модуль"kindsSwiper.js"

export default function kindsSwiper() {
  let kindsSwiper = document.querySelector('.kinds__grid');
  let init = false;

  return () => {
    if (window.innerWidth <= 767) {
      if (!init) {
        init = true;
        kindsSwiper = new Swiper('.kinds__grid', {
          direction: 'horizontal',
          width: 320,
          // spaceBetween: 16,
          slidesPerView: 1.25,
          speed: 300,
          cssMode: true,
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },

          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      }
    } else if (init) {
      kindsSwiper.destroy();
      init = false;
    }
  }
}

kindsSwiper();

window.addEventListener('resize', kindsSwiper());
window.addEventListener('load', kindsSwiper());
