const signIn = document.querySelector('.sign_in');
const signUp = document.querySelector('.sign_up');
const section = document.querySelector('section');
const toggleBtn = document.querySelectorAll('a');

const newPwd = document.querySelector('#new_pwd');
const repeatPwd = document.querySelector('#repeat_pwd');

function comparePwd(newPwd, repeatPwd) {
    if (newPwd.value === repeatPwd.value) {
        repeatPwd.setCustomValidity('')
    }
    else if (newPwd.value !== repeatPwd.value) {
        repeatPwd.setCustomValidity('Passwords do not match!');
    }
};

function toggleForm() {
    signIn.classList.toggle('active');
    signUp.classList.toggle('active');
    section.classList.toggle('active');
};

toggleBtn.forEach(button => {
    button.addEventListener('click', () => {
        toggleForm();
    })
});

repeatPwd.addEventListener('keyup', () => {
    comparePwd(newPwd, repeatPwd);
});