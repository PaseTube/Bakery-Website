const popup = document.querySelector('#popup');
const openBtn = document.querySelector('#openPopup');
const closeBtn = document.querySelector('#closePopup');

openBtn.addEventListener('click', () => {
    popup.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
});