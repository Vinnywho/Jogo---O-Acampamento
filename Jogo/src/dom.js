
import { capitulos } from './capitulos.js';
import { rendenizarJogo, comeco } from './telaInicial.js';

let capituloAtual = "abertura";

let vidas = parseInt(localStorage.getItem('vidas')) || 3;

function escolherCaminho(proximoCapitulo) {
    capituloAtual = proximoCapitulo;
    atualizarConteudo();
}

function atualizarConteudo() {
    const capitulo = capitulos[capituloAtual];
    const conteudo = document.getElementById('conteudo');
    const botoes = document.getElementById('botoes');

    const telaFinal = `
            <h1 id="tituloFim">OBRIGADO POR JOGAR!</h1> 

            <p class="message">Apesar das brincadeiras esse jogo foi desenvolvido com o maior respeito a todos o professores a quel foram citados. Espero que tenha gostado de jogar "O Acampamento", fique a vontade para começar novamente e explorar todas as possibilidades que criamos.</p>
            
            <button id="recomecar">Recomecar</button>
            
            </br>
            </br>
            </br>

            <h3 id="dev">Desenvolvedores</h3>
            </br>
            <p id="erik"><a href="https://www.linkedin.com/in/erik-raimundo-5811762b8/">Erik dos Santos Raimundo</a></p>
            </br>
            <p id="vini"><a href="https://www.linkedin.com/in/vinicius-cardoso-de-lima-a9a918227/">Vinicius Cardoso de Lima</a></p>

            </br>
            </br>
            </br>
`;

function transicao(){
    const bloco = document.getElementById('bloco');
    
        bloco.classList.add('ativo');
    
        setTimeout(() => {
            bloco.classList.remove('ativo');
        }, 600);
}

const novaPagina = document.getElementById('jogo-base1');
const final = document.getElementById('telaFinal');
const casebre = document.getElementById('casebre')

if (!capitulo && (vidas <= 0 || capituloAtual === "fimFuga" || capituloAtual === "contextoFim" || capituloAtual === "goodEnding" || capituloAtual === ".")) {
    final.innerHTML = telaFinal;
    novaPagina.style.display = 'none';
    final.style.display = 'block';
    casebre.style.display = 'none';

    function recomecarJogo() {
        vidas = 3;
        localStorage.setItem('vidas', vidas);
        capituloAtual = "abertura";
        atualizarConteudo();
        novaPagina.style.display = 'block';
        final.style.display = 'none';
        casebre.style.display = 'block';
        transicao();
    }
    
    const botaoRecomecar = document.getElementById('recomecar');
    botaoRecomecar.addEventListener('click', recomecarJogo);
    return;
} else if (!capitulo) {
    capituloAtual = "bau";
    atualizarConteudo();
    return;
}

    function getVidas() {
        return vidas;
    }

    function atualizarVidasUI() {
        const vidasContainer = document.getElementById('vidas-container');
        if (vidasContainer) {
            vidasContainer.innerHTML = `${'❤️'.repeat(vidas)}`;
        }
    }   

    function perderVidas() {
        vidas--;
        localStorage.setItem('vidas', vidas);
        console.log('Vidas restantes:', vidas);
        atualizarVidasUI();
        return vidas;
    }

    Object.values(capitulo.escolhas).forEach(escolha => {
        
    if (escolha.vidas === -1) {
            perderVidas();
        }
    })

    //carregar o conteúdo dos capítulos

    conteudo.innerHTML = `
    
        <div id="vidas-container" class="vidas">${'❤️'.repeat(getVidas())}</div>
        <h1>${capitulo.titulo}</h1>
        <p id="dsc">${capitulo.descricao}</p>
        <a href="https://www.dados-online.pt/1-dados/20-lados.html" target="_blank">${capitulo.url}</a>
    
    `;

    //carregar o conteúdos e escolhas dos botões

    botoes.innerHTML = '';

    Object.values(capitulo.escolhas).forEach(escolha => {
        const botao = document.createElement('button');
        botao.textContent = escolha.texto;
        botao.onclick = () => {
            escolherCaminho(escolha.proximoCapitulo);
            jogoBase1.classList.remove('fade');
            jogoBase1.style.opacity = 0;
        };
        opacidade()
        botoes.appendChild(botao);
    });
}

function iniciarJogo() {

    vidas = 3;
    localStorage.setItem('vidas', vidas);
    
    
    document.getElementById('jogo-base1').innerHTML = `
        <div id="conteudo"></div>
        <div id="botoes"></div>
    `;

    atualizarConteudo(); 
    comeco();
    jogoBase1.classList.add('fade');
    console.log('Vidas restantes:', vidas);
}

const jogoBase1 = document.querySelector('#jogo-base1');

function opacidade(){
    setTimeout(() => {
        jogoBase1.classList.add('fade');
        jogoBase1.style.opacity = 1;
    },0);     
}


rendenizarJogo(iniciarJogo);

