var canvas;
var music;
var block1,block2,block3,block4;
var ball,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,550);
    block1 = createSprite(100,500,200,100);
    block2 = createSprite(300,500,200,100);
    block1.shapeColor="Red"
    block2.shapeColor="blue"
    block3 = createSprite(500,500,200,100);
    block4 = createSprite(700,500,200,100);
    block3.shapeColor="orange"
    block4.shapeColor="green"
  ball = createSprite(random(50,500),random(50,500),50,50);
  ball.setVelocity(-5,+5);

    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
  
    //create edgeSprite


    edges = createEdgeSprites()
    ball.bounceOff(edges);
    if(block1.isTouching(ball)&&ball.bounceOff(block1)){
     ball.shapeColor = "red"
     music.play()
    }
    if(block2.isTouching(ball)&&ball.bounceOff(block2)){
        ball.shapeColor = "blue"
        music.play()
       }
       if(block3.isTouching(ball)&&ball.bounceOff(block3)){
        ball.shapeColor = "orange"
        music.play()
       }
       if(block4.isTouching(ball)&&ball.bounceOff(block4)){
        ball.shapeColor = "green"
        ball.setVelocity(0,0);
        music.stop()
       }

    //add condition to check if box touching surface and make it box
    drawSprites()
}
