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
          spaceBetween: 0,
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
          on: {
            init() {
              this.el.addEventListener('mouseenter', () => {
                this.autoplay.stop();
              });

              this.el.addEventListener('mouseleave', () => {
                this.autoplay.start();
              });
            }
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
