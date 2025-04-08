document.querySelector('.nav__burger').addEventListener('click', function () {
	const burger = document.querySelector('.header__burger');
	const menu = document.querySelector('.header__menu');

	burger.addEventListener('click', () => {
		burger.classList.toggle('header__burger--open');
		menu.classList.toggle('header__menu--open');
	});
});
