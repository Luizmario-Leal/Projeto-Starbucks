let circulo = document.querySelector(".circulo")
let imagem = document.querySelector(".starbucks")

function trocarCor(cor){
    console.log(cor)
    circulo.style.background = cor
}

function trocaImagem(img){
    imagem.src = img
}