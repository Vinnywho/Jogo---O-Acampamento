const jogoBase = document.getElementById('jogo-base');
export function rendenizarJogo(iniciarJogo) {
    
    const telaInicio = `
        <div class="jogo-comeco">
            <div class="conteudo-comeco">
                <h1 class="titulo">Acampamento</h1>
                <p class="game-description">
                    &emsp; Num local desconhecido, Chico acorda desnorteado e confuso, porem nota seus alunos de ADS2, pergunta onde está, Erik e Vini explicam que ele esta num acampamento, apontam para a porta indicando que ele deve seguir por ela. Chico olha para ela e quando se vira novamente os dois sumiram.
                    <br/>
                    Chico segue pela porta e encontra um grupo de colegas professores ao redor de uma fogueira, reconhecendo seus rostos familiares, Lucy, Victor, Aimar e Savino.
                    <br/>
                    Todos estão tão desnorteados quanto ele, entretanto acordaram antes dele.
                    <br/>
                    - Como chegamos aqui? - pergunta Lucy, com sua boina inseparável.
                    <br/>
                    - Pensei que você sabia. Você geralmente sabe - Responde Savino.
                    <br/>
                    - Quando vocês chegaram aqui? chegaram antes de mim ou eu só acordei depois? -  pergunta Chico.
                    <br/>
                    - Eu fui o primeiro a acordar, mas todos ja estávamos juntos nesse casebre - Responde Victor
                    <br/>
                    - Certo, somos todos adultos e vamos descobrir juntos o que aconteceu e onde estamos - Diz Aimar calmamente.
                    <br/>
                    - Vamos ver o que temos de recursos - responde Lucy.
                    <br/>
                    <br/>
                </p>
                <div>
                    <p class="regras">Regras:</p>
                    <ul class="regras-lista">
                        <li>Você começa com 3 vidas</li>
                        <li>Suas escolhas determinam seu destino</li>
                        <li>Se perder todas as vidas o jogo acaba</li>
                        <li>Tenha um dado D20 em mãos ou acesse <a href="https://www.dados-online.pt/1-dados/20-lados.html" target="_blank">aqui</a></li>
                    </ul>
                </div>
                <button onclick="comeco()" class="butao butao-vermelho" id="comecar-jogo">Começar a aventura</button>
            </div>
        </div>
    `;
    
    jogoBase.innerHTML = telaInicio;

    
    const botaoComecar = document.getElementById('comecar-jogo');
    botaoComecar.addEventListener('click', iniciarJogo);
   
}
const novaPagina = document.getElementById('jogo-base1');

export function comeco() {
        const bloco = document.getElementById('bloco');
    
        bloco.classList.add('ativo');
    
        setTimeout(() => {
            jogoBase.style.display = 'none';
            novaPagina.style.display = 'block';
            bloco.classList.remove('ativo');
        }, 600);
    }