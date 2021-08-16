let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let headX = 30;
let headY = 30;

let xDirection = -1;
let yDirection = 0;

let score = 0;
let scoretag = document.getElementById('scoretag');


let applesArray = [];
let snakeTail = [];
let snakeLength = 5;

class Location{

    constructor(x,y){

        this.x = x;
        this.y = y;

    }

}

function moveSnake(){
    
    let snakeTailPart = new Location(headX, headY);
    snakeTail.push(snakeTailPart);

    if(snakeTail.length > snakeLength){

        snakeTail.shift();

    }

    headX = headX + xDirection;
    headY = headY + yDirection;



}

function gameLoop(){

    moveSnake();
    wallHitDetection();
    drawBackground();
    drawApples();
    drawSnake();
    checkAppleCollision();

    if(snakeTailCollision() == true){
       
        scoretag.innerHTML = `Score: ${score} GAME OVER`;    

        clearInterval(gameInterval);
    }

}

function drawBackground(){
    
    ctx.rect(0, 0, 600, 600);
    ctx.fillStyle = "black";
    ctx.fill();

};

function drawSnake(){

    let headPosX = headX * 10;
    let headPosY = headY * 10;

    ctx.fillStyle = 'yellow';
    ctx.fillRect(headPosX, headPosY, 10, 10);
    
    ctx.fillStyle = 'green';

    for(var i = 0; i < snakeTail.length; i++){

        let snakeTailPart = snakeTail[i];      

        ctx.fillRect(snakeTailPart.x * 10, snakeTailPart.y * 10, 10, 10);
        ctx.strokeStyle = '#0a490a'; 
        ctx.strokeRect(snakeTailPart.x * 10, snakeTailPart.y * 10, 10, 10);
    
    }

}

document.addEventListener('keydown', captureKey);

function captureKey(e){

    //up
    if(e.keyCode == 38){

        yDirection = -1;
        xDirection = 0;
    
    }

    //down
    if(e.keyCode == 40){

        yDirection = 1;
        xDirection = 0;
    }

    //left
    if(e.keyCode == 37){

        yDirection = 0;
        xDirection = -1;

    }

    //right
    if(e.keyCode == 39){

        yDirection = 0;
        xDirection = 1;

    }

    //reset
    if(e.keyCode == 82){

        console.log('ResetKey');

    }

}

function drawApples(){

   ctx.fillStyle = 'red';

  for(var i = 0; i < applesArray.length; i++){

    let applePosition = applesArray[i];
    ctx.fillRect(applePosition.x * 10, applePosition.y * 10, 10, 10);

  }
    
}

function wallHitDetection(){

    if(headX == 60){
        headX = 0;
    } else if(headX == -1){
        headX = 59;
    }

    if(headY == 60){
        headY = 0;
    } else if(headY == -1){
        headY = 59;
    }

}

function checkAppleCollision(){

    for(var i = 0; i <applesArray.length; i++){
        
        let appleLocation = applesArray[i];

        if(headX == appleLocation.x && headY == appleLocation.y){

            score++;

            applesArray.splice(i, 1);

            applesArray.push(newApple());
    
            writeScore();

            snakeLength += 1;

        }
            
    }

}

function snakeTailCollision(){

    for(var i = 0; i <snakeTail.length; i++){
        
        let snakeTailPart = snakeTail[i];

        if(headX == snakeTailPart.x && headY == snakeTailPart.y){

            return true;

        }
            
    }

    return false;
}


function writeScore(){

    scoretag.innerHTML = `Score: ${score}`;    

}


function newApple(){

    applePosX = Math.floor(Math.random() * 60);
    applePosY = Math.floor(Math.random() * 60);
    
    return  new Location(applePosX, applePosY);

}

function writeApple(){
    
    for (var i = 0; i < 10; i++){
        
        applesArray.push(newApple());

    }

}

writeApple();

var gameInterval = setInterval(gameLoop, 70);

//add obstacle
//increase speed on apple collison