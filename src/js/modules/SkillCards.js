export default function initSkillCards() {
    const Info = document.querySelector('#info')
    const html = document.getElementById('html')
    const css = document.getElementById('css')
    const js = document.getElementById('js')

    html.addEventListener("mouseover", function (event) {
        Info.textContent = "HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web."
    })
    css.addEventListener("mouseover", function (event) {
        Info.textContent = "CSS (Cascading Style Sheets ou Folhas de Estilo em Cascata) é uma linguagem de estilo usada para descrever a apresentação de um documento escrito em HTML ou em XML."
    })
    js.addEventListener("mouseover", function (event) {
        Info.textContent = "JavaScript é uma linguagem de programação interpretada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web."
    })
    bootstrap.addEventListener("mouseover", function (event) {
        Info.textContent = "Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo."
    })

    html.addEventListener("mouseout", function (event) {
        Info.textContent = "Passe o mouse sobre o cartão para ler"
    })
    css.addEventListener("mouseout", function (event) {
        Info.textContent = "Passe o mouse sobre o cartão para ler"
    })
    js.addEventListener("mouseout", function (event) {
        Info.textContent = "Passe o mouse sobre o cartão para ler"
    })
    bootstrap.addEventListener("mouseout", function (event) {
        Info.textContent = "Passe o mouse sobre o cartão para ler"
    })

}