let canvas = document.getElementById("snake"); //selecionamos a id que colocamos no index
let context = canvas.getContext("2d"); //o contexto renderiza o desenho que vai ter o canvas, aqui será um plano 2d
let box = 32; //cada quadradinho vai ter 32 pixels
let snake = []; //definindo como array
snake[0]={ //estabelecendo o tamanho pra poder trabalhar com o for lá na função criarCobrinha
    x: 8 * box,
    y: 8 * box
}

//essa função é para criar o background do jogo
function criarBG(){
    context.fillStyle = "lightgreen"; //definindo a cor, fillstyle é o estilo do canvas
    context.fillRect(0, 0, 16*box, 16*box); //no index a largura e altura de 512 pixels foi settada; esse desenha o retângulo, onde acontece o jogo, trabalha com 4 parâmetros (x, y, altura e largura)
}


//a cobrinha vai ser um array de coordenadas
//esse array é porque vamos colocar um elemento no início e tirar um do final, que é a forma de a cobrinha andar

function criarCobrinha(){ //vamos trabalhar com for pra criar a cobrinha, vai percorrer todo o array e incrementar
    //ele vai pintar o corpo dela de verde (que nem o fundo)
    for(i=0; i<snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box); //tamanho em x e y que passamos lá em cima, e os tamanhos de box que são do quadradinho
    }

}

criarBG();

criarCobrinha();