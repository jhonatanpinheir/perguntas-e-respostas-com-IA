const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Um dia você acorda e descobre que a tecnologia agora pode te responder tudo, literalmente tudo que você quiser saber, qual seria sua reação?",

        alternativas: [
            {
                texto: "Uau, isso é impressionante!",
                afirmacao: "Agora que posso obter respostas para qualquer pergunta."
            },
            {
                texto: "Isso é preocupante.",
                afirmacao: "Ter todas as respostas pode fazer com que eu dependa demais da tecnologia."
            }
        ]
    },
    {
        enunciado: "Com a possibilidade de agora saber oque quiser qual atitude você toma?",
        alternativas: [
            {
                texto: "Com a possibilidade de saber o que quiser, vou me concentrar em fazer perguntas que me ajudem a crescer e a entender o mundo de forma mais profunda, em vez de apenas buscar respostas rápidas.",
                afirmacao: "Me concentro e busco por informações que vão agregar conhecimento a mim."
            },
            {
                texto: "Com a possibilidade de saber o que quiser, posso acabar me sentindo sobrecarregado e me tornar dependente da tecnologia.",
                afirmacao: "Deixo isso de lado por enquanto."
            }
        ]
    },
    {
        enunciado: "Em meu dia a dia surge uma duvida muito difícil, e tiro minha duvida com a tecnologia.",
        alternativas: [
            {
                texto: "Faço a pergunta para a tecnologia e ela me responde muito bem.",
                afirmacao: "Ela me respondeu detalhe por detalhe muito bem explicado."
            },
            {
                texto: "Acabo fazendo a pergunta para a nova tecnologia e ela me responde.",
                afirmacao: "Não sei se devo confiar muito nessa tecnologia nova, vou fazer mais pesquisas para saber se ela acertou."
            }
        ]
    },
    {
        enunciado: "A tecnologia nova faz muito sucesso com todos.",
        alternativas: [
            {
                texto: "Todos usam da tegnologia e agradecem seu criador.",
                afirmacao: "Ela ajuda em todas as aréas de trabalho."
            },
            {
                texto: "Todos usam dessa tecnologia e isso pode ser um problema.",
                afirmacao: "Ela pode tirar vários empregos como professores, contadores, administradores,e etc."
            }
        ]
    },
    {
        enunciado: "Essa tecnologia pode ser um problema grave?",
        alternativas: [
            {
                texto: "Ela apenas ajuda a obter mais conhecimento respondendo qualquer de suas duvidas.",
                afirmacao: "A melhor coisa inventada até agora pois pode ajudar a todos."
            },
            {
                texto: "Pode ser boa, mais esta causando a demissão de algumas aréas de trbalho.",
                afirmacao: "Ela esta causando a demissão de professores, pois não tem mais oque se aprender pois ela responde tudo que você precisar."
            }
        ]
    },
   
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
