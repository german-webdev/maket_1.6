// модуль"kindsSwiper.js"

export default function kindsSwiper() {
  let init = false;

  return () => {
    if (window.innerWidth <= 767) {
      if (!init) {
        init = true;
        let swiper = new Swiper(".kinds__grid", {
            direction: 'horizontal',
            width: 320,
            // spaceBetween: 16,
            slidesPerView: 1.25,
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

kindsSwiper();
