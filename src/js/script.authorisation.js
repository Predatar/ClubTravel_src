document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login');
    const authForm = document.querySelector('.auth');

    const authTitle = document.querySelector('.authorisation__title');

    const authBtnSwitch = document.querySelector('.login__btn-reg');
    const loginBtnSwitch = document.querySelector('.auth__btn-log');

    loginForm.classList.add('login_active');

    authBtnSwitch.addEventListener('click', () => {
        loginForm.classList.remove('login_active');
        authForm.classList.add('auth_active');
        authTitle.innerHTML = 'Зарегистрируйтесь используя соц. сети';
    });
    loginBtnSwitch.addEventListener('click', () => {
        loginForm.classList.add('login_active');
        authForm.classList.remove('auth_active');
        authTitle.innerHTML = 'Войдите используя соц. сети';
    });

    loginForm.addEventListener('submit', async e => {
        e.preventDefault();

        const email = loginForm.querySelector('.login__email').value,
            password = loginForm.querySelector('.login__pass').value;

        const user = {
            email: email,
            password: password
        };

        await fetch('http://localhost:1337/api/club-users')
            .then(response => response.json())
            .then(({ data }) => {
                data.forEach(elem => {
                    if (elem.attributes.email == user.email) {
                        if (elem.attributes.password == user.password) {
                            localStorage.setItem('isLogin', 'true');
                            Swal.fire({
                                title: 'Вы вошли в аккаунт',
                                icon: 'success'
                            }).then(() => {
                                document.location.href = 'personal-cabinet.html';
                            });
                        } else {
                            Swal.fire({
                                title: 'Не правильный пароль',
                                icon: 'error'
                            });
                        }
                    } else {
                        Swal.fire({
                            title: 'Такой пользователь не зарегестрирован',
                            icon: 'error'
                        });
                    }
                });
            })
            .catch(error => console.log(error));
    });

    authForm.addEventListener('submit', async e => {
        e.preventDefault();

        const email = authForm.querySelector('.auth__email').value;
        const pass = authForm.querySelector('.auth__pass').value;
        const passRepeat = document.querySelector('.auth__repeat').value;

        const user = {
            data: {
                email: email,
                password: pass
            }
        };

        if (pass == passRepeat) {
            await fetch('http://localhost:1337/api/club-users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(user)
            })
                .then(() => {
                    Swal.fire({
                        title: 'Вы зарегестрировались',
                        icon: 'success'
                    });
                })
                .then(() => {
                    loginForm.classList.add('login_active');
                    authForm.classList.remove('auth_active');
                    authTitle.innerHTML = 'Войдите используя соц. сети';
                })
                .catch(error => console.log(error));
        }
    });
});
