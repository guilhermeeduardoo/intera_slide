
let target = 0 
let quantidade = document.querySelectorAll(".secao").length
document.querySelector(".slide-larg").style.width = `calc(100vw * ${quantidade})`

let back = document.querySelector(".con--left")
let next = document.querySelector(".con--right")



function upmargin () {
    let margen = (target * document.body.clientWidth)
    document.querySelector(".slide-larg").style.marginLeft = `-${margen}px`
}

back.addEventListener("click", () => {
    target --   
    if(target < 0) {
        target = quantidade - 1 
    }
    upmargin()
})

next.addEventListener("click", () => {
    target ++   
    if(target > (quantidade - 1)) {
        target = 0 
    }
    upmargin()
})

function Modal (idmod,Mod) {
    const mod = document.getElementById(idmod)
    const div = document.getElementById(Mod)
    mod.style.display = 'flex'
    mod.addEventListener('click', (e) => {
        if (e.target.id === idmod || e.target.id === Mod) {
            mod.style.display = 'none'
        }
    })
}

const curl = document.querySelector('.curiculo-1')
curl.addEventListener('click', () => {
    Modal('Modal--1','curiculo--big')
})

const curl2 = document.querySelector('.curiculo-2')
curl2.addEventListener('click', () => {
    Modal('Modal--2','curiculo--big')
})








































// Sempre que clicar ira acontecer um decremento
// Ele irá voltar para a ultima pagina
// Sempre que que clicar irá acontecer um incremento
// Ele irá voltar para pagina inicial 