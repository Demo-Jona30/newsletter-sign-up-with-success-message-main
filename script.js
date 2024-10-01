const input_el = document.querySelector('input[type="email"');
const submit_el = document.querySelector('.subscribe');

let check;
input_el.addEventListener('blur', () => {
    const email = input_el.value;
    if(!validateEmail(email))
    {
        document.querySelector('.error').innerHTML = `Enter valid Email`;
    }
})

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    check = emailRegex.test(email)
    return check;
}

submit_el.addEventListener('click', () => {
    if(check)
        validated();
});

function validated(){
    document.querySelector('.container-flex').style.display = 'none';
    document.querySelector('.container-thank-you').classList.remove('hidden');
};

document.querySelector('.return').addEventListener('click', () => {
    document.querySelector('.container-thank-you').classList.add('hidden');
    document.querySelector('.container-flex').style.display = 'grid';
});