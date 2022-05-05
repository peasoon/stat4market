const burgerBtn = document.querySelector('#burgerBtn');
const headerMenu = document.querySelector('#headerMenu');

burgerBtn.addEventListener('click', () => {
	headerMenu.classList.toggle('show')
	burgerBtn.classList.toggle('close')
})
