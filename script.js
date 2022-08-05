const signIn = document.querySelector('.sign_in');
const signUp = document.querySelector('.sign_up');
const section = document.querySelector('section');
const toggleBtn = document.querySelectorAll('a');

function toggleForm() {
    signIn.classList.toggle('active');
    signUp.classList.toggle('active');
    section.classList.toggle('active');
}

toggleBtn.forEach(button => {
    button.addEventListener('click', () => {
        toggleForm();
    })
})

