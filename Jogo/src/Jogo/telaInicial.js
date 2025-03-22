
export function rendenizarJogo(iniciarJogo) {
    const jogoBase = document.getElementById('jogo-base');
    
    const telaInicio = `
        <div class="jogo-comeco">
            <div class="conteudo-comeco">
                <h1 class="titulo">Acampamento</h1>
                <p class="game-description">
                    &emsp; Num acampamento desconhecido, Chico acorda desnorteado e confuso, vê seus alunos de ADS2, pergunta onde está e como foi parar lá, Erik e Vini explicam rapidamente o que está acontecendo, apontam para a porta indicando que ele deve seguir por ela. O Bolsonaro kawaii olha para ela e quando se vira novamente os dois sumiram.
                    <br/>
                    Chico segue pela porta e encontra um grupo de colegas professores ao redor de uma fogueira, reconhecendo alguns rostos familiares, Lucy, Victor, Aimar e Savino.
                    <br/>
                    Todos estão tão desnorteados quanto ele, porém acordaram antes dele.
                    <br/>
                    - Como chegamos aqui? - pergunta Lucy, toda descabelada com sua boina inseparável.
                    <br/>
                    - Pensei que você sabia. Você geralmente sabe de tudo - Responde Savino.
                    <br/>
                    - Quando vocês chegaram aqui? chegaram antes de mim ou eu só acordei depois? -  pergunta Chico.
                    <br/>
                    - Eu fui o primeiro a acordar, mas todos estávamos juntos nesse casebre - Responde Victor
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
                        <li>Cada escolha perigosa pode custar uma vida</li>
                        <li>Se perder todas as vidas, o jogo termina com uma morte horrível</li>
                        <li>Suas escolhas determinam seu destino</li>
                    </ul>
                </div>
                <button class="butao butao-vermelho" id="comecar-jogo">Começar a aventura</button>
            </div>
        </div>
    `;
    
    jogoBase.innerHTML = telaInicio;

    
    const botaoComecar = document.getElementById('comecar-jogo');
    botaoComecar.addEventListener('click', iniciarJogo);
}