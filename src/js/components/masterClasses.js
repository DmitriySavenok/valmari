import Swiper, { Navigation, Pagination } from "swiper";

function masterClassesSlider() {
	const swiper = new Swiper('.master-classes__slider', {
		modules: [Navigation, Pagination],
		autoHeight: true,
		direction: 'horizontal',

		// If we need pagination
		pagination: {
			el: '.master-classes__pagination',
			type: 'bullets',
		},
		// Navigation arrows
		navigation: {
			nextEl: '.master-classes__slider-button-next',
			prevEl: '.master-classes__slider-button-prev',
		},

		breakpoints: {
			1000: {
				loop: false,
				slidesPerView: 2,
				spaceBetween: 150,
				centeredSlides: false,
				initialSlide: 0,
			}
		}
	  });
}

export default {
	masterClassesSlider
};
