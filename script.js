
const swiper = new Swiper('.swiper', {
    loop: false,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 16,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      grid: {
        rows: 2,
        fill: 'row',
      },
      spaceBetween: 16,
      allowTouchMove: false,
      centeredSlides: false,
    },
  },
});
const swiperWrapper = document.querySelector('.swiper-wrapper');
const toggleBtn = document.getElementById('toggleBtn');


toggleBtn.textContent = 'Показать все';

toggleBtn.addEventListener('click', () => {
  const isHidden = swiperWrapper.classList.toggle('hidden');

  toggleBtn.textContent = isHidden ? 'Показать все' : 'Свернуть';
});
