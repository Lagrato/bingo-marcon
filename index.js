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
    "A aula não é baseada no material"
];
const spanids = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9'];

const pickRandomFrase = () => FRASES.splice(Math.floor(Math.random() * FRASES.length), 1)

window.onload = () => {
    for (id of spanids) {
        const span = document.getElementById(id)
        span.textContent = pickRandomFrase();
        const div = span.parentElement
        div.onclick = () => {
            if (div.className == 'celula_completa') div.className = 'celula'
            else div.className = 'celula_completa'
        }
    }

}
