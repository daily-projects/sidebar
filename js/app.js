const searchButton = document.getElementById('search');
const runButton = document.getElementById('run');
const navButton = document.getElementById('nav');
const navText = document.getElementById('navText');
const nav = document.querySelector('nav');



searchButton.addEventListener('click', () => openSideBar(event))
runButton.addEventListener('click', () => openSideBar(event))



openSideBar = (event) => {
	const id = event.target.id;
	nav.style.left = '0';
	if (id === 'search') {
		navText.textContent = 'Whao! You found me!';
		navButton.textContent = 'Hide back';
	} else {
		navText.textContent = 'Please do not run!';
		navButton.textContent = 'Close';
	}
}

navButton.addEventListener('click', () => {
	nav.style.left = '-400px';
})