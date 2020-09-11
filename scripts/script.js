"use strict";

document.body.addEventListener('click', e => {
  const button = e.target.closest('.hide-button');
  if (!button) return;
  button.closest('.container').querySelector('.hidden-block').classList.toggle('hidden-block_opened');
  button.closest('.container').querySelectorAll('.hide-button').forEach(item => {
    item.classList.toggle('hide-button_opened');
  });
});
"use strict";

document.body.addEventListener('click', e => {
  const selector = e.target.closest('.language-selector');
  if (!selector) return;
  selector.classList.toggle('language-selector_opened');
});
document.body.addEventListener('click', e => {
  const currentLanguage = e.target.closest('.language-selector__current > .language');
  if (!currentLanguage) return;
  e.preventDefault();
});
"use strict";

const linksSwiper = document.querySelector('.links-swiper__inner') && new Swiper('.links-swiper__inner', {
  slidesPerView: 1,
  spaceBetween: 18,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    // when window width is >= 320px
    541: {
      slidesPerView: 2
    },
    700: {
      slidesPerView: 3
    },
    // when window width is >= 480px
    1000: {
      slidesPerView: 4
    },
    1330: {
      slidesPerView: 5
    }
  }
});