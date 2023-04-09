const photo = document.querySelector('#photo');
const smashButton = document.querySelector('#smash');
const passButton = document.querySelector('#pass');

const photoUrls = [
	'1.jpg',
	'2.jpg',
	'3.jpg'
];

const loadPhoto = () => {
	const randomIndex = Math.floor(Math.random() * photoUrls.length);
	const photoUrl = photoUrls[randomIndex];
	photo.setAttribute('src', photoUrl);
};

smashButton.addEventListener('click', () => {
	loadPhoto();
});

passButton.addEventListener('click', () => {
	loadPhoto();
});
