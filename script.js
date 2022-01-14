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
    trocaImage.setAttribute('src', `random/${nAleatorio}.webp`)



    imagePesada.innerHTML = `${imrandom}`

}
function outraideia() {
    location.reload();
}
