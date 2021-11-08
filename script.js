
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









































// Sempre que clicar ira acontecer um decremento
// Ele irá voltar para a ultima pagina
// Sempre que que clicar irá acontecer um incremento
// Ele irá voltar para pagina inicial 