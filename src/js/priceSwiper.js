// модуль"priceSwiper.js"

export default function priceSwiper() {
  let init = false;

  return () => {
    if (window.innerWidth <= 767) {
      if (!init) {
        init = true;
        let swiper = new Swiper(".price__grid", {
            direction: 'horizontal',
            width: 320,
            spaceBetween: 16,
            slidesPerView: 1.215,
            speed: 400,
            cssMode: true,

            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },

            mousewheel: {
              sensitivity: 1,
              eventsTarget: '.swiper'
            },
        });
      }
    } else if (init) {
      swiper.destroy();
      init = false;
    }
  }
}

priceSwiper();
