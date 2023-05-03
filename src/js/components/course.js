import Swiper, { Navigation, Pagination } from "swiper";

function courseSlider() {
	const swiper = new Swiper('.swiper', {
		modules: [Navigation, Pagination],
		autoHeight: true,
		loopPreventsSliding: true,
		spaceBetween: 60,
		centeredSlidesBounds: true,
		slidesPerView: 3,
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
	  });
}

export default {
	courseSlider
};
