var ground;
var woodmen;
var objects;
var groundImage;
var woodmenImage;

function preload(){
    groundImage = loadImage("ground.png");
    woodmenImae = loadImage ("woodmen.png")

}

function setup(){
    createCanvas(displayWidth-20,displayHeight-170);

    // creating ground
    ground = createSprite(displayWidth/2-10,displayHeight-200,displayWidth-20,20);
    ground.addImage(groundImage);
    ground.velocityX = -3;
    ground.scale = 2.5;
    woodmen = addImage(woodmenImage);

    //creating player
    woodmen = createSprite(100,displayHeight-270,20,40);
    woodmen = addImage(woodmenImage);




}
function draw(){
    background(0);
    if(ground.x <0 ){
        ground.x = displayWidth/2-10;

    }
    if(keyDown("space")){
        woodmen.velocityY = -10;
    }
    //adding gravity
    woodmen.velocityY =  woodmen.velocityY+0.8;

    woodmen.collide(ground);
    object();

    drawSprites();

}
function object(){  
    if(frameCount%100 === 0){
        objects = createSprite(displayWidth-20,displayHeight-270,20,50);
        objects.velocityX = -3;
        objects.lifetime = 400;

    }

}