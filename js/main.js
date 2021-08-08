document.addEventListener('DOMContentLoaded', () => {
	const openHamburger = document.querySelector('.hamburger'),
		menu = document.querySelector('.menu'),
		menuItem = document.querySelectorAll('.menu__item');

	openHamburger.addEventListener('click', () => {
		menu.classList.toggle('menu__active');
		openHamburger.classList.toggle('hamburger__active');
		document.body.classList.toggle('hidden');
	})

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			menu.classList.toggle('menu__active');
			openHamburger.classList.toggle('hamburger__active');
			document.body.classList.remove('hidden');
		})
	})

	let anchors = document.querySelectorAll('nav a[href*="#"]');

	for (anchor of anchors) {
		anchor.addEventListener('click', function (e) {
			e.preventDefault()
			anchorId = this.getAttribute('href')
			document.querySelector(anchorId).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
		})
	}
})