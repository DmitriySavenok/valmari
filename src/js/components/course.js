import Swiper, { Navigation, Pagination } from "swiper";

function courseSlider() {
	const swiper = new Swiper('.swiper', {
		modules: [Navigation, Pagination],
		direction: 'horizontal',
		autoHeight: true,
		spaceBetween: 30,
		loop: true,
		slidesPerView: 1.2,
		slidesPerGroup: 1,
		initialSlide: 1,
		centeredSlides: true,

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		breakpoints: {
			480: {
				slidesPerView: 2,
				centeredSlides: true,
			},

			480: {
				loop: true,
			},

			1000: {
				loop: false,
				slidesPerView: 3,
				slidesPerGroup: 1,
				initialSlide: 0,
				centeredSlides: false,
			}
		}
	  });
}

export default {
	courseSlider
};
