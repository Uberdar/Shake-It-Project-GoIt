var swiper = new Swiper('.mySwiper', {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
  el: '.swiper-pagination',
  clickable: true,
  },
  grabCursor: true,
  keyboard: {
    enable: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    invert: true,
    forceToAxis: false,
    sensitivity: 1,
  },
  speed: 800,
});