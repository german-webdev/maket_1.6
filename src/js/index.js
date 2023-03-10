import '../scss/style.scss'
// import mobileSlider from '../js/swiper.js';

import brandsSwiper from '../js/brandsSwiper.js';
import kindsSwiper from '../js/kindsSwiper.js';
import priceSwiper from '../js/priceSwiper.js';
import moreToggle from '../js/moreToggle.js';
import sidebarToggle from '../js/sidebarToggle.js';

console.log('Works!')

window.addEventListener('resize', priceSwiper());
window.addEventListener('load', priceSwiper());
window.addEventListener('resize', brandsSwiper());
window.addEventListener('load', brandsSwiper());
window.addEventListener('resize', kindsSwiper());
window.addEventListener('load', kindsSwiper());







