const btnSubmit = document.querySelector('button');

btnSubmit.addEventListener('click', () => {

    setTimeout(() => {
        alert('Enviando... Por favor, aguarde! Pode levar um tempinho.');
    }, 2000);
})