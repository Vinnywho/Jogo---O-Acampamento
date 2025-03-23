function resposta () {
    return Math.round(Math.random()*10) + 1;
}
export const capitulos = {
    abertura: {
        titulo: "Casebre",
        descricao: "Todos se levantam e avançam em direção ao casebre.",
        escolhas: {
            comeco: {
                texto: "Entrar no casebre",
                proximoCapitulo: "bau"
            }
        }
    },

    bau: {
        titulo: "O Baú",
        descricao: "Havia um baú contendo 4 itens de camping, eles serão divididos entre vocês, Escolha um:",
        escolhas: {
            corda:{
                texto: "Corda",
                proximoCapitulo: "escolhaCorda"
            },
            faca:{
                texto: "Faca",
                proximoCapitulo: "sozinho"
            },
            lanterna:{
                texto: "Lanterna",
                proximoCapitulo: "escolhaLanterna"
            },
            fosforo:{
                texto: "Caixa de fósforo",
                proximoCapitulo: "escolhaFosforo"
            }
        }
    },

    //caminhos sozinho
    sozinho: {
        titulo: "Sozinho",
        descricao: "Vocês seguem para fora novamente. - Temos que encontrar uma saída, vamos dividir as funções e nos modularizar, pois assim encontraremos algo mais rapidamente - Diz Lucy. Existem três caminhos, um seguindo para um lago banhado à luz da lua, um para uma floresta fechada e escura e outro para um celeiro bem iluminado porém distante.",
        escolhas: {
            responder: {
                texto: "- E por onde devemos seguir? - respondo",
                proximoCapitulo: "caminhosSozinho"
            }
        }
    },

    caminhosSozinho: {
        titulo: "Os caminhos",
        descricao: "Existem três caminhos, um seguindo para um lago banhado à luz da lua, um para uma floresta fechada e escura e outro para um celeiro bem iluminado porém distante. Por onde você segue?",
        escolhas:{
            lago: {
                texto: "Você decide ir ao lago, para tentar procurar um barco.",
                proximoCapitulo: "lagoSozinho"
            },
            floresta:{
                texto: "Você decide ir para a floresta, buscar alguma saída.",
                proximoCapitulo: "florestaSozinho"
            },
            celeiro:{
                texto: "Você decide ir ao celeiro buscar abrigo pois está frio e a fogueira está apagando.",
                proximoCapitulo: "celeiroSozinho"
            }
        }
    },

    lagoSozinho: {
        titulo: "Lago Sozinho",
        descricao: "Você chega ao lago, não encontra nada e segue para o celeiro.",
        escolhas:{
            voltar: {
                texto: "Ir em direção ao celeiro",
                proximoCapitulo: "celeiroSozinho"
            }
        }
    },

    florestaSozinho: {
        titulo: "Floresta Sozinho",
        descricao: "Você avança pela floresta e se depara com um grande portão misterioso e uma figura macabra no escuro sussurra um enigma para você: Sou um sussurro na escuridão, um eco de arrependimento. Meus olhos não veem, mas minha alma observa. Alimento-me de segredos e sede de esquecimento. Onde o tempo se curva e a razão se desfaz, lá encontrarei meu lar. Quem sou eu?",
        escolhas:{
            resposta1: {
                texto: "Um Fantasma",
                vidas: "",
                proximoCapitulo: "fimMorte"
            },
            resposta2: {
                texto: "A Loucura",
                vidas: "",
                proximoCapitulo:"fimFuga"
            },
            resposta3: {
                texto: "Não responder e fugir",
                vidas: -1,
                proximoCapitulo: "caminhosSozinho"
            }
        }
    },

    celeiroSozinho:{
        titulo: "Celeiro Sozinho",
        descricao: "Você chega no celeiro ao mesmo tempo que os outros, a porta do celeiro está entre-aberta, ao entrar vocês se deparam com uma criatura horrenda, várias cabeças e um corpo constituído inteiramente de pele morta e flácida, essa criatura se encontra em cima de savino.",
        escolhas: {
            fugir:{
                texto:"Fugir e abandonar todos",
                vidas: "",
                proximoCapitulo: "fimMorte"
            },
            lutar: {
                texto: "Lutar",
                vidas: "",
                proximoCapitulo: "fimLuta"
            }
        }
    },
    celeiroSozinho2:{
        titulo: "Sorte?",
        descricao: "Chico se posiciona em um andar acima da criatura, respira e salta em direção ao que parece ser a cabeça principal, porem a criatura reage e o agarra com a boca e o lança em direção a uma parede, quando parece ser o fim, Chico acerta algo macio, Lucy jogou uma pilha de feno no momento exato! A vida lhe deu outra oportunidade, não a desperdice.",
        escolhas: {
            lutar: {
                texto: "Tentar novamente",
                vidas: -1,
                proximoCapitulo: "fimLuta2"
            }
        }
    },

    goodEnding:{
        titulo: "A batalha feroz",
        descricao: "Chico se posiciona em um andar acima da criatura, respira e salta em direção ao que parece ser a cabeça principal, tudo parecia se mover em camera lenta, tudo que Chico podia sentir era sua respiração ofegante e seu coração acelerado, sem saber se sairá vivo, Chico fecha seus olhos e... Acerta! um golpe decisivo na cabeça, a faca perfura a pele flacida e o crânio do monstro, a criatura começa a se debater em agonia lançando nosso herói em uma pilha de feno.",
        escolhas: {
            lutar: {
                texto: "Finalizar",
                proximoCapitulo: "contextoFim"
            }
        }
    },

    contextoFim:{
        titulo: "A batalha feroz se encerra.",
        descricao: "Chico fica paralizado após esse embate, Aimar e Lucy o trazem de volta a realidade, os 3 vão ate savino e notam que ele está apenas desacordado, sem ferimentos piores, Lucy encontra um celular, se encontra no mapa e liga para um hospital, após alguns minutos eles ouvem as sirenes e todos parecem ter saido são e salvos desse desastre, os médicos perguntam o que causou esse estrago no celeiro e os danos a você e seus colegas, Chico, Lucy e Aimar procuram a criatura e ela desapareceu.",
        escolhas: {
            lutar: {
                texto: "Fim do Jogo?",
                proximoCapitulo: ""
            }
        }
    },

    //caminhos corda
    escolhaCorda: {
        titulo: "Corda",
        descricao: "Vocês seguem para fora novamente. - Temos que encontrar uma saída, vamos dividir as funções e nos modularizar, pois assim encontraremos algo mais rapidamente - Diz Lucy. Existem três caminhos, um seguindo para um lago banhado à luz da lua, um para uma floresta fechada e escura e outro para um celeiro bem iluminado porém distante.",
        escolhas: {
            responder: {
                texto: "- E por onde devemos seguir? - respondo",
                proximoCapitulo: "caminhosCorda"
            }
        }
    },

    caminhosCorda:{
        titulo: "Os caminhos com a corda",
        descricao: "Existem três caminhos, um seguindo para um lago banhado à luz da lua, um para uma floresta fechada e escura e outro para um celeiro bem iluminado porém distante. Por onde você segue?",
        escolhas:{
            lago: {
                texto: "Você e lucy decidem ir ao lago, para tentar procurar um barco.",
                proximoCapitulo: "lagoCorda"
            },
            floresta:{
                texto: "Você e lucy decidem ir para a floresta, buscar alguma saída.",
                proximoCapitulo: "florestaCorda"
            },
            celeiro:{
                texto: "Você e lucy decidem ir ao celeiro buscar abrigo pois está frio e a fogueira está apagando.",
                proximoCapitulo: "celeiroCorda"
            }
        }
    },

    lagoCorda: {
        titulo: "No Lago",
        descricao: "Você e a Lucy não encontram nada, depois de conversarem o que poderiam fazer, decidem ir em direção ao celeiro",
        escolhas: {
            irAoCeleiro:{
                texto: "Seguir para o celeiro",
                proximoCapitulo: "celeiroCorda"
            }
        }
    },

    celeiroCorda:{
        titulo: "No Celeiro",
        descricao: "Você e lucy se dirigem ao celeiro, e encontraram Victor em cima de dois corpos, vocês os reconhecem, Aimar e Savino se encontram mortos a facadas. Victor começa se revelar sendo uma falsa-hidra, caçando você e Lucy, que se encontram indefesos.",
        escolhas: {
            fugir:{
                texto:"Fugir e abandonar Lucy",
                vidas: "",
                proximoCapitulo: "fimFuga"
            },
            lutar: {
                texto: "Lutar", //com uma corda não tem muita coisa que se possa fazer
                vidas: -1,
                proximoCapitulo: "fimLuta"
            }
        }
    },

    florestaCorda:{
        titulo: "Na Floresta",
        descricao: " Você e a Lucy seguem pela floresta e se deparam com um portão, uma figura misteriosa aparece, Lucy solta um grito que atiça a criatura que ataca vocês dois. Lucy morre e você consegue fugir para o celeiro.",
        escolhas: {
            correr:{
                texto: "Você corre em direção ao celeiro",
                vidas: -1,
                proximoCapitulo: "celeiroSozinho"
            }
        }
    },
    //caminho lanterna
    escolhaLanterna: {
        titulo: "Lanterna",
        descricao: "Vocês seguem para fora novamente. - Temos que encontrar uma saída, vamos dividir as funções e nos modularizar, pois assim encontraremos algo mais rapidamente - Diz Lucy. Existem três caminhos, um seguindo para um lago banhado à luz da lua, um para uma floresta fechada e escura e outro para um celeiro bem iluminado porém distante.",
        escolhas: {
            responder: {
                texto: "- E por onde devemos seguir? - respondo",
                proximoCapitulo: "caminhosLanterna"
            }
        }
    },

    caminhosLanterna:{
        titulo: "Os caminhos com a lanterna",
        descricao: "Existem três caminhos, um seguindo para um lago banhado à luz da lua, um para uma floresta fechada e escura e outro para um celeiro bem iluminado porém distante. Por onde você segue?",
        escolhas:{
            lago: {
                texto: "Você e Savino decidem ir ao lago, para tentar procurar um barco.",
                proximoCapitulo: "lagoLanterna"
            },
            floresta:{
                texto: "Você e Savino decidem ir para a floresta, buscar alguma saída.",
                proximoCapitulo: "florestaLanterna"
            },
            celeiro:{
                texto: "Você e Savino decidem ir ao celeiro buscar abrigo pois está frio e a fogueira está apagando.",
                proximoCapitulo: "celeiroLanterna"
            }
        }
    },

    lagoLanterna: {
        titulo: "No Lago",
        descricao:" Você e o Savino não encontram nada, discutem mas vão para o celeiro sem conversar.",
        escolhas: {
            irAoCeleiro:{
                texto: "Seguir para o celeiro",
                vidas:"",
                proximoCapitulo: "celeiroLanterna"
            }
        }
    },

    florestaLanterna: {
        titulo: "Na floresta",
        descricao: "Você e o savino seguem pela floresta, se deparam com um portão e uma figura misteriosa aparece, ela sussurra um enigma. Savino no desespero responde o enigma incorretamente e a figura se revela atacando vocês dois",
        escolhas: {
            morte:{
                texto: "Aceitar a morte",
                vidas: -1,
                proximoCapitulo: "fimMorte"
            }
        }
    },

    celeiroLanterna:{
        titulo: "No Celeiro",
        descricao: "Você e Savino se dirigem ao celeiro, encontrando Victor transformado em um montro assustador, uma falsa-hidra, com o Aimar morto ao seus pés, e Lucy sendo devorada, Victor os percebe e persegue vocês,",
        escolhas: {
            fugir:{
                texto: "Fugir e tentar se salvar",
                proximoCapitulo: "fugaLanterna"
            },
            lutar:{
                texto: "Lutar com Savino",
                vidas: -1,
                proximoCapitulo: "fimMorte"
            }
        }
    },

    fugaLanterna:{
        titulo: "Fuga",
        descricao:"Voce direciona a lanterna na face do monstro, e ela perde os sentidos por um curto periodo te tempo, mas ataca Savino. Enquanto isso você usa a oportunidade para fugir",
        escolhas: {
            fugir: {
                texto: "Se salvar a todo custo",
                proximoCapitulo: "fimFuga"
            }
        }
    },
    //caminhos fosforo
    escolhaFosforo: {
        titulo: "Fosforo",
        descricao: "Vocês seguem para fora novamente. - Temos que encontrar uma saída, vamos dividir as funções e nos modularizar, pois assim encontraremos algo mais rapidamente - Diz Lucy. Existem três caminhos, um seguindo para um lago banhado à luz da lua, um para uma floresta fechada e escura e outro para um celeiro bem iluminado porém distante.",
        escolhas: {
            responder: {
                texto: "- E por onde devemos seguir? - respondo",
                proximoCapitulo: "caminhosFosforo"
            }
        }
    },

    caminhosFosforo:{
        titulo: "Os caminhos com o fosforo",
        descricao: "Existem três caminhos, um seguindo para um lago banhado à luz da lua, um para uma floresta fechada e escura e outro para um celeiro bem iluminado porém distante. Por onde você segue?",
        escolhas:{
            lago: {
                texto: "Você e Aimar decidem ir ao lago, para tentar procurar um barco.",
                proximoCapitulo: "lagoFosforo"
            },
            floresta:{
                texto: "Você e Aimar decidem ir para a floresta, buscar alguma saída.",
                proximoCapitulo: "florestaFosforo"
            },
            celeiro:{
                texto: "Você e Aimar decidem ir ao celeiro buscar abrigo pois está frio e a fogueira está apagando.",
                proximoCapitulo: "celeiroFosforo"
            }
        }
    },

    lagoFosforo:{
        titulo: "No Lago",
        descricao: "Você e Aimar chegam a beira do lago e encontram um barco destruido, mas dentro dele havia um tanque de combustível cheio.",
        escolhas:{
            combustivel:{
                texto:"Pegar o combustivel e ir para o celeiro",
                proximoCapitulo: "celeiroFosforo1"
            },
            fogueira:{
                texto: "Ficar a beira do lago e fazer uma fogueira",
                proximoCapitulo: "fimMorte"
            }
        }
    },

    florestaFosforo:{
        titulo: "Na Floresta",
        descricao: "Você e o Aimar seguem pela floresta, se deparam com um portão e uma figura misteriosa aparece, ela sussurra uma pergunta simples: Quantos fósforos tem na caixa? Você sabe que devem ter no máximo 10 fósforos.",
        escolhas: {
            1:{
                texto:"1 fosforo",
                proximoCapitulo: "fimMorte"
            },
            2:{
                texto:"2 fosforos",
                proximoCapitulo: "fimMorte"
            },
            3:{
                texto:"3 fosforos",
                proximoCapitulo: "fimMorte"
            },
            4:{
                texto:"4 fosforos",
                proximoCapitulo: "fimMorte"
            },
            5:{
                texto:"5 fosforos",
                proximoCapitulo: "fimMorte"
            },
            6:{
                texto:"6 fosforos",
                proximoCapitulo: "fimMorte"
            },
            7:{
                texto:"7 fosforos",
                proximoCapitulo: "fimMorte"
            },
            8:{
                texto:"8 fosforos",
                proximoCapitulo: "fimFuga"
            },
            9:{
                texto:"9 fosforos",
                proximoCapitulo: "fimMorte"
            },
            10:{
                texto:"10 fosforos",
                proximoCapitulo: "fimMorte"
            },
        }
    },
    
    celeiroFosforo:{
        titulo:"No Celeiro",
        descricao: "Vocês seguem ao celeiro para buscar abrigo, e usam o fósforo para se aquecer, aimar se distrai e incendeia o celeiro.",
        escolhas: {
            queimado:{
                texto: "Morrer queimado",
                saida: -1,
                proximoCapitulo: ""
            }
        }
    },

    celeiroFosforo1:{
        titulo:"No Celeiro",
        descricao: "Vocês chegam no celeiro e se deparam com uma grande criatura dilacerando a carne de Lucy, essa criatura era Savino transformado em uma falsa-hidra",
        escolhas: {
            lutar:{
                texto: "Jogar o combustivel na criatura e acender um fósforo",
                proximoCapitulo: "fimFuga"
            },
            fugir: {
                texto:"Fugir enquanto pode",
                saida: -1,
                proximoCapitulo: "fimMorte"
            }
        }
    },


    fimMorte:{
        titulo: "Você morreu",
        descricao: "A criatura te atacou e você morreu",
        escolhas: {
            fim:{
                texto: "Aceitar sua morte",
                vidas: -1,
                proximoCapitulo: ""
            }
        }
    },

    fimFuga:{
        titulo: "Fuga",
        descricao: "Você conseguiu fugir!!",
        escolhas: {
            fim:{
                texto: "Fugir",
                proximoCapitulo: ""
            }
        }
    },

    fimLuta:{
        titulo: "Monstro a frente! Role iniciativa!",
        descricao: "Vocês se chocam com uma situação de vida ou morte, Lucy corre e se esconde para pensar direito, aimar se prontifica e tenta distrair o monstro para que Chico ataque, sua faca é a unica arma, agarre-se a ela com firmeza pois ela pode custar não apenas a sua vida, mas a de todos os seus amigos. Role um D20",
        escolhas: {
            maior14:{
                texto: "Se rolou mais que 14",
                proximoCapitulo: "goodEnding"
            },
            menor14:{
                texto: "Se rolou menos de 14",
                proximoCapitulo: "celeiroSozinho2"
            }
        }
    },

    fimLuta2:{
        titulo: "Monstro a frente! Nova oportunidade!",
        descricao: "Lucy salvou sua vida, não perca as esperanças, ✨você é preenchido de determinação✨ Role um D20",
        escolhas: {
            maior14:{
                texto: "Se rolou mais que 14",
                vidas: "",
                proximoCapitulo: "goodEnding"
            },
            menor14:{
                texto: "Se rolou menos de 14",
                vidas: -1,
                proximoCapitulo: "fimMorte"
            }
        }
    },
}
