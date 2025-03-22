
import { capitulos } from './capitulos.js';
import { rendenizarJogo } from './telaInicial.js';

let capituloAtual = "abertura";

function escolherCaminho(proximoCapitulo) {
    capituloAtual = proximoCapitulo;
    atualizarConteudo();
}

function atualizarConteudo() {
    const capitulo = capitulos[capituloAtual];
    const conteudo = document.getElementById('conteudo');
    const botoes = document.getElementById('botoes');

    if (!capitulo) {
        conteudo.innerHTML = `
            <h1>Fim do Jogo</h1>
            <p>Não há mais capítulos disponíveis.</p>
        `;
        botoes.innerHTML = `<button id="recomecar">Recomeçar</button>`; 
        function recomecarJogo() {
            capituloAtual = "abertura";
            atualizarConteudo();
        }
        const botaoRecomecar = document.getElementById('recomecar');
            botaoRecomecar.addEventListener('click', recomecarJogo);
        return;
    }

    

    
    conteudo.innerHTML = `
        <h1>${capitulo.titulo}</h1>
        <p>${capitulo.descricao}</p>
    `;

    
    botoes.innerHTML = '';

    // Adiciona os novos botões
    Object.values(capitulo.escolhas).forEach(escolha => {
        const botao = document.createElement('button');
        botao.textContent = escolha.texto;
        botao.onclick = () => escolherCaminho(escolha.proximoCapitulo);
        botoes.appendChild(botao);
    });
}

function iniciarJogo() {
    
    document.getElementById('jogo-base').innerHTML = `
        <div id="conteudo"></div>
        <div id="botoes"></div>
        <div class="grama"></div>
    `;
    atualizarConteudo(); 
}



rendenizarJogo(iniciarJogo);