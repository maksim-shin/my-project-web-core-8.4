const toggleBtn = document.getElementById('toggleBtn');
const wrapper = document.querySelector('.swiper-wrapper');
let swiperInstance = null;

if (window.innerWidth < 768) {
  if (!swiperInstance) {
    swiperInstance = new Swiper('.swiper', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      centeredSlide: true,
      slidesPerGroup: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
  toggleBtn.style.display = 'none';
  wrapper.classList.remove('is-open');


  if (swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }
  
  
  if (wrapper.scrollHeight > wrapper.clientHeight) {
    toggleBtn.style.display = 'flex';
  } else {
    toggleBtn.style.display = 'none';
    wrapper.classList.remove('is-open');
  }
}


toggleBtn.addEventListener('click', () => {
  if (wrapper.classList.contains('is-open')) {
    wrapper.classList.remove('is-open');
    toggleBtn.innerHTML = '<img src="./brands_logo/expand.svg" alt="">Показать все';
  } else {
    wrapper.classList.add('is-open');
    toggleBtn.innerHTML = '<img src="./brands_logo/expand.svg" alt="">Скрыть';
  }
});


window.addEventListener('resize', () => {
 
  if (window.innerWidth < 768) {
    if (!swiperInstance) {
      swiperInstance = new Swiper('.swiper', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }
    toggleBtn.style.display = 'none';
    wrapper.classList.remove('is-open');
  } else {
    if (swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }

    if (wrapper.scrollHeight > wrapper.clientHeight) {
      toggleBtn.style.display = 'flex';
    } else {
      toggleBtn.style.display = 'none';
      wrapper.classList.remove('is-open');
    }
  }
});
