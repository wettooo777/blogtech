// 1. Funcionalidade do Tema Escuro
const botaoTema = document.getElementById('btn-tema');

botaoTema.addEventListener('click', () => {
    document.body.classList.toggle('tema-escuro');
});

// 2. Funcionalidade dos botões de curtida (❤️ e 👍)
const botoesReacao = document.querySelectorAll('.btn-reacao');

botoesReacao.forEach((botao) => {
    botao.addEventListener('click', () => {
        const contador = botao.querySelector('span');
        let valorAtual = Number(contador.textContent);
        contador.textContent = valorAtual + 1;
    });
});