const dispCatNot = document.getElementById('cartNot');
const addCart1 = document.getElementById('addCart1');
const addCart2 = document.getElementById('addCart2');
const addCart3 = document.getElementById('addCart3');
const cartQuant = document.getElementById('cartQuant');

addCart1.addEventListener('click', () => {
    cartQuant.style.display = 'initial';
})

addCart2.addEventListener('click', () => {
    cartQuant.innerText = '2';
})