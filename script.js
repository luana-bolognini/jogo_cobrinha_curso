//na organização temos em primeiro lugar as definições, feitas pouco a pouco, depois a definição/descrição das funções e por fim as chamadas de funções


let canvas = document.getElementById("snake"); //selecionamos a id que colocamos no index
let context = canvas.getContext("2d"); //o contexto renderiza o desenho que vai ter o canvas, aqui será um plano 2d
let box = 32; //cada quadradinho vai ter 32 pixels
let snake = []; //definindo como array
snake[0]={ //estabelecendo o tamanho pra poder trabalhar com o for lá na função criarCobrinha
    x: 8 * box,
    y: 8 * box
}
let direction = "right"; //primeira definição de direção da cobrinha


//FUNÇÃO CRIAR BACKGROUND//
//essa função é para criar o background do jogo
function criarBG(){
    context.fillStyle = "lightgreen"; //definindo a cor, fillstyle é o estilo do canvas
    context.fillRect(0, 0, 16*box, 16*box); //no index a largura e altura de 512 pixels foi settada; esse desenha o retângulo, onde acontece o jogo, trabalha com 4 parâmetros (x, y, altura e largura)
}


//FUNÇÃO CRIAR COBRINHA//
//a cobrinha vai ser um array de coordenadas
//esse array é porque vamos colocar um elemento no início e tirar um do final, que é a forma de a cobrinha andar
// na criação do quadradinho inicial da cobrinha, temos o valor settado inicialmente (por isso ela está no meio nesse ponto, apenas o quadradinho no meio)
function criarCobrinha(){ //vamos trabalhar com for pra criar a cobrinha, vai percorrer todo o array e incrementar
    //ele vai pintar o corpo dela de verde (que nem o fundo)
    for(i=0; i<snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box); //tamanho em x e y que passamos lá em cima, e os tamanhos de box que são do quadradinho
    }

}


//FUNÇÃO INICIAR JOGO//
function iniciarJogo(){ //aqui vamos passar as outras funções para que inicie corretamente

    criarBG();
    criarCobrinha();

    let snakeX= snake[0].x;
    let snakeY= snake[0].y;

    //MOVIMENTAÇÃO DA COBRINHA
    //vamos passar várias condicionais para fazer a movimentação, aumentando ou dimminuindo quadradinhos conforme os comandos
    if (direction == "right") snakeX += box; //se a direção for direita, a coordenada X vai adicionar um quadradinho
    if (direction == "left") snakeX -= box; //diminuindo para dar a ilusão de que está indo para a esquerda

    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    //APAGAR FINAL DA COBRINHA
    snake.pop(); //a função pop é a que retira o último elemento do nosso array

    //ADICIONAR CABEÇA DA COBRINHA
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead); //nesse ponto inicialmente temos a cobrinha sumindo depois que passa pra um determinado lado, até porque estabelecemos inicialmente apenas right pra ela, então ela corre e some por uma parede


}

let jogo= setInterval(iniciarJogo,100); //esse comando faz a renovação a cada 100 milissegundos pra que ele não trave


//agora precisamos settar os movimentos da cobrinha, pra fazer o jogo direito; para isso precisamos criar variável pra movimentação dela

//estabelecer função para movimentação, para parar o jogo