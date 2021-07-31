const button = document.querySelector('button');
const input = document.querySelector('input');
const error = document.querySelector('.error');

const re = /^[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*@([a-zA-Z0-9_-]+)(\.[a-zA-Z0-9_-]+)*(\.[a-zA-Z]{2,4})$/i;

const checkEmail = () => {
    if (input.value.match(re) == null) {
        error.style.color = 'rgb(184, 23, 23)';
    } else {
        error.style.color = 'transparent';
        input.value = '';
    }
};

button.addEventListener('click', checkEmail);