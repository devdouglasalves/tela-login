const checkSenha = window.document.querySelector('#checkSenha');
const email = window.document.querySelector('input#caixaEmail');
const senha = window.document.querySelector('input#caixaSenha');
const login = window.document.querySelector('input#button');

checkSenha.addEventListener('change', function () {

    if(checkSenha.checked) {
        senha.type = 'text';
    } else {
        senha.type = 'password';
    }

}); 

function fazerLogin(event) {
    event.preventDefault()
    
    if (email.value.length != 0 && senha.value.length != 0){
        login.value = ('Login Efetuado!');
        login.style.backgroundColor = 'green';

    } else {
        alert('Dados não preenchidos, verificar email ou senha.');
    }
}
