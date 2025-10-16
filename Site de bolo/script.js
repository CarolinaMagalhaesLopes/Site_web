function login() {
    let usuario = document.getElementById('txtUsuario').value;
    let senha = document.getElementById('txtSenha').value;
    let mensagem = document.getElementById('mensagem');

    if (usuario === 'Admin' && senha === '123456') {
        mensagem.style.color = "green";
        mensagem.innerText = "Login correto";
        setTimeout(() => {
            window.location.href = "home.html";
        }, 1000);
    } else {
        mensagem.style.color = "red";
        mensagem.innerText = "Login incorreto";
    }
}