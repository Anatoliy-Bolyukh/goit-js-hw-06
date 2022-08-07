const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('Всі поля повинні бути заповнені!')

    }

    let obj = { email: email.value, pasword: password.value }
    console.log(obj);
    event.currentTarget.reset();
})
