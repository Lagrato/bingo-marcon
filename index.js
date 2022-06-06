const FRASES = [
    "Minha ex-mulher negra...",
    "Minha filha...",
    "Mulheres empoderadas",
    "Não estou doutrinando vocês",
    "Dou aula a muito tempo",
    "Chamei o Caio pra MG",
    "Maria Helena é uma Deusa",
    "Vou conversar com vocês/ser honesto",
    "O que o vestibular cobra é o problema",
    "A aula não é baseada no material",
    "Meu país é o Brasil e eu gosto de falar do Brasil",
    "*demora mais de 15 mins pra passar 1 slide.*",
    "Essa sala é muito boa/o caio adora essa sala",
    "Morar em Portugal",
    "É importante ler gráficos/tabelas/mapas"

];
const spanids = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9'];
const divids = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const filas = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['1', '4', '7'], ['2', '5', '8'], ['3', '6', '9'], ['1', '5', '9'], ['3', '5', '7']];

const pickRandomFrase = () => FRASES.splice(Math.floor(Math.random() * FRASES.length), 1)

const atualizar_pontos = () => {
    let pontos = 0;
    for (divid of divids) {
        if (document.getElementById(divid).className == 'celula_completa') pontos++;
    }
    for (fila of filas) {
        if (fila.some((x) => document.getElementById(x).className == 'celula')) continue;
        pontos += 2;
    }
    document.getElementById('score').innerHTML = pontos;
}

window.onload = () => {
    for (id of spanids) {
        const span = document.getElementById(id)
        span.textContent = pickRandomFrase();
        const div = span.parentElement
        div.onclick = () => {
            if (div.className == 'celula_completa') div.className = 'celula'
            else div.className = 'celula_completa'
            atualizar_pontos();
        }
    }

}
