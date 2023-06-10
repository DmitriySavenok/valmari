import Swiper, { Navigation, Pagination } from "swiper";

function courseSlider() {
	const swiper = new Swiper('.course__slider-container', {
		modules: [Navigation, Pagination],
		direction: 'horizontal',
		autoHeight: true,
		spaceBetween: 30,
		loop: true,
		slidesPerView: 1.2,
		slidesPerGroup: 1,
		initialSlide: 1,

		// If we need pagination
		pagination: {
			el: '.course__slider-pagination',
			type: 'bullets',
		},
		// Navigation arrows
		navigation: {
			prevEl: '.course__slider-button-prev',
			nextEl: '.course__slider-button-next',
		},

		breakpoints: {
			480: {
				slidesPerView: 2,
				centeredSlides: true,
				loop: true,
			},

			1000: {
				loop: false,
				slidesPerView: 3,
				slidesPerGroup: 1,
				initialSlide: 0,
				spaceBetween: 60,
				centeredSlides: false,
			}
		}
	  });
}

export default {
	courseSlider
};
