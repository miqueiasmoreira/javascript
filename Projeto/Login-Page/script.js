document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (email === 'teste@teste.com' && senha === 'senha123') {
        alert('Login bem-sucedido!');
    } else {
        alert('Credenciais inválidas. Tente novamente.');
    }
});