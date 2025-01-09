const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const formulario = document.querySelector('form');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const erros = [];

    const campoNome = document.querySelector('#name');
    const txtNome = document.querySelector('#txtNome');

    if (campoNome.value.trim().length < 3) {
        erros.push('Por favor, insira um nome com pelo menos 3 caracteres.');
        txtNome.innerHTML = 'Por favor, insira um nome com pelo menos 3 caracteres.';
        txtNome.style.color = 'red';
    } else {
        txtNome.innerHTML = '';
    }

    const campoEmail = document.querySelector('#email');
    const txtEmail = document.querySelector('#txtEmail');

    if (!campoEmail.value.match(emailRegex)) {
        erros.push('O e-mail informado é inválido. Certifique-se de incluir um "@" e um domínio válido (ex.: exemplo@dominio.com).');
        txtEmail.innerHTML = 'O e-mail informado é inválido. Certifique-se de incluir um "@" e um domínio válido (ex.: exemplo@dominio.com).';
        txtEmail.style.color = 'red';
    } else {
        txtEmail.innerHTML = '';
    }

    const campoSubject = document.querySelector('#subject');
    const txtSubject = document.querySelector('#txtSubject');

    if (campoSubject.value.trim().length < 5) {
        erros.push('O assunto precisa ter no mínimo 5 caracteres para ser mais claro.');
        txtSubject.innerHTML = 'O assunto precisa ter no mínimo 5 caracteres para ser mais claro.';
        txtSubject.style.color = 'red';
    } else {
        txtSubject.innerHTML = '';
    }

    const campoMessage = document.querySelector('#message');
    const txtMessage = document.querySelector('#txtMessage') || document.createElement('span');
    if (!txtMessage.id) {
        txtMessage.id = 'txtMessage';
        campoMessage.insertAdjacentElement('afterend', txtMessage);
    }

    if (campoMessage.value.trim().length < 20) {
        erros.push('A mensagem precisa ter no mínimo 20 caracteres para ser detalhada.');
        txtMessage.innerHTML = 'A mensagem precisa ter no mínimo 20 caracteres para ser detalhada.';
        txtMessage.style.color = 'red';
    } else {
        txtMessage.innerHTML = '';
    }

    if (erros.length > 0) {
        console.error('Erros encontrados:', erros);
        return; // Interrompe o envio do formulário
    }

    alert("Formulário enviado com sucesso! Obrigado por entrar em contato!");

    campoNome.value = '';
    campoEmail.value = '';
    campoSubject.value = '';
    campoMessage.value = '';
});
