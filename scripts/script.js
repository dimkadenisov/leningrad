"use strict";

document.body.addEventListener('click', e => {
  const button = e.currentTarget.closest('.hide-button');

  if (button) {
    if (button.classList.contain('hide-button_opened')) {}
  }
});
"use strict";

const handleSelectMouseEnter = function (event) {
  this.classList.add('language-selector_opened');
};

const handleSelectMouseLeave = function (event) {
  this.classList.remove('language-selector_opened');
};

document.querySelectorAll('.language-selector').forEach(selector => {
  selector.addEventListener('mouseenter', handleSelectMouseEnter);
  selector.addEventListener('mouseleave', handleSelectMouseLeave);
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
      selector.removeEventListener('mouseenter', handleSelectMouseEnter);
      setTimeout(() => {
        selector.addEventListener('mouseenter', handleSelectMouseEnter);
      }, 200);
    }
  });
});
"use strict";

const linksSwiper = new Swiper('.links-swiper__inner', {
  slidesPerView: 1,
  spaceBetween: 18,
  // loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    // when window width is >= 320px
    500: {
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