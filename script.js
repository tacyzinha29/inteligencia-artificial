const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual abordagem é mais eficaz para reduzir a emissão de gases de efeito estufa?",
        alternativas: [
            {
                texto: "Adoção de veículos elétricos",
                afirmacao: "A sustentabilidade ambiental abrange práticas como reduzir a emissão de gases, conservar biodiversidade e combater a poluição. Prioriza a redução do uso de plásticos e do desmatamento, além da adoção de agricultura orgânica. Medidas como coletar água da chuva e utilizar transporte público são essenciais para um futuro sustentável."
            },
            {
                texto: "Uso de transporte público",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual prática tem maior impacto na preservação da biodiversidade?",
        alternativas: [
            {
                texto: "Criação de áreas de proteção ambiental",
                afirmacao: ""
            },
            {
                texto: "Redução do desmatamento",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual medida é mais eficiente para combater a poluição dos oceanos?",
        alternativas: [
            {
                texto: "Redução do uso de plásticos descartáveis.",
                afirmacao: ""
            },
            {
                texto: "Implementação de tecnologias de limpeza marinha",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual é o método mais sustentável de produção de alimentos?",
        alternativas: [
            {
                texto: "Agricultura orgânica",
                afirmacao: ""
            },
            {
                texto: "Agricultura convencional com uso de fertilizantes químicos",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual é a forma mais efetiva de economizar água em áreas urbanas?",
        alternativas: [
            {
                texto: "Instalação de sistemas de coleta de água da chuva",
                afirmacao: ""
            },
            {
                texto: "Adoção de tecnologias de baixo consumo de água em residênciasS",
                afirmacao: ""
            }
        ]
}
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em resumo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
