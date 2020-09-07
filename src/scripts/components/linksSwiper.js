const linksSwiper =
	document.querySelector('.links-swiper__inner') &&
	new Swiper('.links-swiper__inner', {
		slidesPerView: 1,
		spaceBetween: 18,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			// when window width is >= 320px
			541: {
				slidesPerView: 2,
			},
			700: {
				slidesPerView: 3,
			},
			// when window width is >= 480px
			1000: {
				slidesPerView: 4,
			},
			1330: {
				slidesPerView: 5,
			},
		},
	});
