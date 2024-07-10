const olhoSenha = window.document.getElementById('olhoSenha');
const email = window.document.querySelector('input#caixaEmail');
const senha = window.document.querySelector('input#caixaSenha');
const login = window.document.querySelector('input#button');

olhoSenha.addEventListener('click', function () {

    const type = senha.type === 'password' ? 'text' : 'password'

    senha.type = type;

    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');

}); 

function fazerLogin() {
    if (email.value.length != 0 && senha.value.length != 0){
        login.value = ('Login Efetuado!');
        login.style.backgroundColor = 'green';

    } else {
        alert('Dados não preenchidos, verificar email ou senha.');
    }
} 