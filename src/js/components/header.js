function openHeaderMenu() {
	const toggleButton = document.querySelector('#toggle-button');
	const body = document.querySelector('.body');

	toggleButton.addEventListener( 'click', (e) => {
		body.classList.toggle('header__menu--opened');
	})

	document.addEventListener('keydown', function(e) {
		if( e.keyCode == 27 ) { // код клавиши Escape, но можно использовать e.key
			body.classList.remove('header__menu--opened');
		}
	});
}

export default {
	openHeaderMenu
};
