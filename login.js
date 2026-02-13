const form = document.querySelector('.card-login');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = form.email.value;
    const password = form.password.value;

    try {
        const response = await fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const result = await response.text();

        if(result === "success") {
            alert("Login realizado!");
            window.location.href = 'dashboard.html';
        } else {
            alert("Email ou senha inválidos!");
        }
    } catch (err) {
        console.error(err);
    }
});
