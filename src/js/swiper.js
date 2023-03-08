// модуль"swiper.js"

export default function mobileSlider() {
  let init = false;

  return () => {
    if (window.innerWidth <= 767) {
      if (!init) {
        init = true;
        swiper = new Swiper(".swiper", {
            direction: 'horizontal',
            width: 320,
            spaceBetween: 16,
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

mobileSlider();






