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
                saida: {},
                proximoCapitulo: "bau"
            }
        }
    },

    bau: {
        titulo: "O Baú",
        descricao: "Havia um baú contendo 4 itens de camping, eles serão divididos entre vocês, um de vocês não terá item auxiliar. Escolha um:",
        escolhas: {
            corda:{
                texto: "Corda",
                saida: {},
                proximoCapitulo: "escolhaCorda"
            },
            faca:{
                texto: "Faca",
                saida: {},
                proximoCapitulo: "sozinho"
            },
            lanterna:{
                texto: "Lanterna",
                saida: {},
                proximoCapitulo: "escolhaLanterna"
            },
            fosforo:{
                texto: "Caixa de fósforo",
                saida: {},
                proximoCapitulo: "escolhaFosforo"
            },
            nada:{
                texto: "Não pegar nada",
                saida: {},
                proximoCapitulo: "escolhaNada"
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
                saida: {},
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
                saida: {},
                proximoCapitulo: "lagoSozinho"
            },
            floresta:{
                texto: "Você decide ir para a floresta, buscar alguma saída.",
                saida: {},
                proximoCapitulo: "florestaSozinho"
            },
            celeiro:{
                texto: "Você decide ir ao celeiro buscar abrigo pois está frio e a fogueira está apagando.",
                saida: {},
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
                saida: {},
                proximoCapitulo: "celeiroSozinho"
            }
        }
    },

    florestaSozinho: {
        titulo: "Floresta Sozinho",
        descricao: "Você avança pela floresta e se depara com um grande portão misterioso e uma figura macabra no escuro sussurra um enigma para você.",
        escolhas:{
            resposta1: {
                texto: {},
                saida: {},
                proximoCapitulo: {}
            },
            resposta2: {
                texto: {},
                saida: {},
                proximoCapitulo: {}
            },
            resposta3: {
                texto: {},
                saida: {},
                proximoCapitulo: {}
            }
        }
    },

    celeiroSozinho:{
        titulo: "Celeiro Sozinho",
        descricao: "Você chega no celeiro ao mesmo tempo que os outros, a porta do celeiro está entre-aberta, ao entrar vocês se deparam com uma criatura horrenda, várias cabeças e um corpo constituído inteiramente de pele morta e flácida, essa criatura se encontra em cima de savino.",
        escolhas: {
            fugir:{
                texto:"Fugir e abandonar todos",
                //saida: {'perder todas as vidas'},
                proximoCapitulo: "fimMorte"
            },
            lutar: {
                texto: "Lutar",
                //saida: {'perder uma vida'},
                proximoCapitulo: "fimLuta"
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
                saida: {},
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
                saida: {},
                proximoCapitulo: "lagoCorda"
            },
            floresta:{
                texto: "Você e lucy decidem ir para a floresta, buscar alguma saída.",
                saida: {},
                proximoCapitulo: "florestaCorda"
            },
            celeiro:{
                texto: "Você e lucy decidem ir ao celeiro buscar abrigo pois está frio e a fogueira está apagando.",
                saida: {},
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
                saida: {},
                proximoCapitulo: "celeiroCorda"
            }
        }
    },

    celeiroCorda:{
        titulo: "No Celeiro",
        descricao: "Você e lucy se dirigem ao celeiro, e encontraram Victor em cima de dois corpos, vocês os reconhecem, Aimar e Savino se encontram mortos a facadas. Victor começa se revelar sendo uma falsa-hidra, caçando você e lucy, que se encontram indefesos.",
        escolhas: {
            fugir:{
                texto:"Fugir e abandonar Lucy",
                //saida: {'perder todas as vidas'},
                proximoCapitulo: "fimMorte"
            },
            lutar: {
                texto: "Lutar", //com uma corda não tem muita coisa que se possa fazer
                //saida: {'perder uma vida'},
                proximoCapitulo: "fimLuta"
            }
        }
    },

    florestaCorda:{
        titulo: "Na Floresta",
        descricao: " Você e a lucy seguem pela floresta e se deparam com um portão, uma figura misteriosa aparece, Lucy solta um grito que atiça a criatura que ataca vocês dois. Lucy morre e você consegue fugir para o celeiro.",
        escolhas: {
            correr:{
                texto: "Você corre em direção ao celeiro",
                //saida: {perder uma vida},
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
                saida: {},
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
                saida: {},
                proximoCapitulo: "lagoLanterna"
            },
            floresta:{
                texto: "Você e Savino decidem ir para a floresta, buscar alguma saída.",
                saida: {},
                proximoCapitulo: "florestaLanterna"
            },
            celeiro:{
                texto: "Você e Savino decidem ir ao celeiro buscar abrigo pois está frio e a fogueira está apagando.",
                saida: {},
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
                saida: {},
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
                saida: {},
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
                saida: {},
                proximoCapitulo: "fugaLanterna"
            },
            lutar:{
                texto: "Lutar com Savino",
                saida: {},
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
                saida: {},
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
                saida: {},
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
                saida: {},
                proximoCapitulo: "lagoFosforo"
            },
            floresta:{
                texto: "Você e Aimar decidem ir para a floresta, buscar alguma saída.",
                saida: {},
                proximoCapitulo: "florestaFosforo"
            },
            celeiro:{
                texto: "Você e Aimar decidem ir ao celeiro buscar abrigo pois está frio e a fogueira está apagando.",
                saida: {},
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
                saida: {},
                proximoCapitulo: "celeiroFosforo1"
            },
            fogueira:{
                texto: "Ficar a beira do lago e fazer uma fogueira",
                saida: {},
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
                saida: {},
                proximoCapitulo: "fimMorte"
            },
            2:{
                texto:"2 fosforos",
                saida: {},
                proximoCapitulo: "fimMorte"
            },
            3:{
                texto:"3 fosforos",
                saida: {},
                proximoCapitulo: "fimMorte"
            },
            4:{
                texto:"4 fosforos",
                saida: {},
                proximoCapitulo: "fimMorte"
            },
            5:{
                texto:"5 fosforos",
                saida: {},
                proximoCapitulo: "fimMorte"
            },
            6:{
                texto:"6 fosforos",
                saida: {},
                proximoCapitulo: "fimMorte"
            },
            7:{
                texto:"7 fosforos",
                saida: {},
                proximoCapitulo: "fimMorte"
            },
            8:{
                texto:"8 fosforos",
                saida: {},
                proximoCapitulo: "fimFuga"
            },
            9:{
                texto:"9 fosforos",
                saida: {},
                proximoCapitulo: "fimMorte"
            },
            10:{
                texto:"10 fosforos",
                saida: {},
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
                saida: {},
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
                saida: {},
                proximoCapitulo: "fimFuga"
            },
            fugir: {
                texto:"Fugir enquanto pode",
                saida: {},
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
                saida:{},
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
                saida:{},
                proximoCapitulo: ""
            }
        }
    }

};

function respostaCerta(){
    if(1 == resposta){
        proximoCapitulo: "fimFuga"
    }else{
        proximoCapitulo: "fimMorte"
    }
    
    if(2 == resposta){
        proximoCapitulo: "fimFuga"
    }else {
        proximoCapitulo: "fimMorte"
    }
    
    if (3 == resposta){
        proximoCapitulo: "fimFuga"
    }else {
        proximoCapitulo: "fimMorte"
    }
    
    if (4 == resposta){
        proximoCapitulo: "fimFuga"
    }else {
        proximoCapitulo: "fimMorte"
    }
    
    if (5 == resposta){
        proximoCapitulo: "fimFuga"
    }else {
        proximoCapitulo: "fimMorte"
    }
    
    if (6 == resposta){
        proximoCapitulo: "fimFuga"
    }else {
        proximoCapitulo: "fimMorte"
    }
    
    if (7 == resposta){
        proximoCapitulo: "fimFuga"
    }else {
        proximoCapitulo: "fimMorte"
    }
    
    if (8 == resposta){
        proximoCapitulo: "fimFuga"
    }else {
        proximoCapitulo: "fimMorte"
    }
    
    if (9 == resposta){
        proximoCapitulo: "fimFuga"
    }else{
        proximoCapitulo: "fimMorte"
    }
    
    if(10 == resposta){
        proximoCapitulo: "fimFuga"
    }else{
        proximoCapitulo: "fimMorte"
    }
    return;
}