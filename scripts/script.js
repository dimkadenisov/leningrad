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

const handleLanguageSelectorOpen = function (event) {
  this.classList.add('language-selector_opened');
};

const handleLanguageSelectorCLose = function (event) {
  this.classList.remove('language-selector_opened');
};

document.querySelectorAll('.language-selector').forEach(selector => {
  selector.addEventListener('click', handleLanguageSelectorOpen, handleLanguageSelectorCLose);
});
document.querySelectorAll('.language').forEach(language => {
  language.addEventListener('click', function (event) {
    if (language.closest('.language-list')) {
      const appendTarget = language.parentNode;
      const selector = language.closest('.language-selector');
      const oldLanguage = selector.querySelector('.language-selector__current .language');
      oldLanguage.parentNode.appendChild(language);
      appendTarget.appendChild(oldLanguage);
      selector.classList.remove('language-selector_opened');
      selector.removeEventListener('click', handleLanguageSelectorOpen);
      setTimeout(() => {
        selector.addEventListener('click', handleLanguageSelectorOpen);
      }, 200);
    }
  });
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