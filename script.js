let canvas = document.getElementById("snake"); //selecionamos a id que colocamos no index
let context = canvas.getContext("2d"); //o contexto renderiza o desenho que vai ter o canvas, aqui será um plano 2d
let box = 32; //cada quadradinho vai ter 32 pixels


//essa função é para criar o background do jogo
function criarBG(){
    context.fillStyle = "lightgreen"; //definindo a cor, fillstyle é o estilo do canvas
    context.fillRect(0, 0, 16*box, 16*box); //no index a largura e altura de 512 pixels foi settada; esse desenha o retângulo, onde acontece o jogo, trabalha com 4 parâmetros (x, y, altura e largura)
}

criarBG();