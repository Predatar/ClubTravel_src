document.addEventListener('DOMContentLoaded', () => {
    const recoveryForm = document.querySelector('.recovery__form');

    recoveryForm.addEventListener('submit', async e => {
        e.preventDefault();

        await fetch('http://localhost:1337/api/club-users')
            .then(response => response.json())
            .then(({ data }) => {
                data.forEach(elem => {
                    console.log(elem);
                    if (elem.attributes.email == recoveryForm.querySelector('.recovery__input').value) {
                        Swal.fire({
                            title: 'Ваш пароль',
                            text: elem.attributes.password,
                            icon: 'info'
                        }).then(() => {
                            document.location.href = 'authorisation.html';
                        });
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
});
