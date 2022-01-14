// function verImagem() {
//     AgoraAguarde.innerHTML = `Agora Aguarde!`
//     euTedisse.innerHTML = `Carregando...`
//     bemPesada.innerHTML = `Eu te Disse, ela é bem Pesada...`
//     var  img = document.querySelector('img#imagemPesada')
//     img.setAttribute('src', 'imagem/bem-pesasa.gif') 
   
    
// }
function randomImagen() {

    const nAleatorio = (Math.random() * 68).toFixed(0,2);
    var  trocaImage = document.querySelector('img#trocaImage')

    const selecaoStick = (Math.random() * 4).toFixed(0,2)

    if (selecaoStick == 1){
        trocaImage.setAttribute('src', `random/${nAleatorio}.webp`)
    } else if (selecaoStick == 2){
        trocaImage.setAttribute('src', `random/bebe_${nAleatorio}.webp`)
    } else if (selecaoStick == 3){
        trocaImage.setAttribute('src', `random/meme_${nAleatorio}.webp`)
    } else {
        trocaImage.setAttribute('src', `random/animals_${nAleatorio}.webp`)
    }


    imagePesada.innerHTML = `${imrandom}`

}
function outraideia() {
    location.reload();
}
