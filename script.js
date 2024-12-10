const search = document.querySelector('.search');
const input = document.querySelector('.inputText');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
})