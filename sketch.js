
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var score =0;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

var thor1, villan5, strombreaker,gameover, background, powerUp;
var thor1Img,villan5Img, villan4Img, gameoverImg, backgroundImg, powerUpImg;
var villan5Group, villan4Group;
var score = 0;

var life =20;
var score=0;
var gameState=1

function preload(){
	thor1Img = loadImage("image/thor.png")
	gameoverImg = loadImage("image/gameOver.png")
	villan5Img = loadImage("image/v3.png")
	villan4Img = loadImage("image/villan4.png")
	backgroundImg= loadImage("image/gtaGraphic.png")
	//powerUpImg= loadImage("image/powerUp2.png")
}

function setup() {
	createCanvas(15000, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//bg= createSprite(50, width/2, 100,height);
	//bg.addImage(backgroundImg)
	//bg.scale = 50
	
	thor1= createSprite(100, height/2, 50,50);
	thor1.addImage(thor1Img)
	thor1.scale=1
	//powerUp= createSprite(100, height/2, 100,50);
	//powerUp.addImage(powerUpImg)
	//powerUp.scale=0.2
	 
	villan5Group = createGroup();   
	villan4Group = createGroup(); 


	Engine.run(engine);
  
}

function draw() {
	background(backgroundImg);
	//imageMode(CENTER);
	//image(backgroundImg,800,450,width*10,900)
  
	
	  //showLife() 
	 // push();{
	  //image(lifeImage, width / 2 - 130, height - player.positionY - 400, 20, 20);
	  //fill("white");
	  //rect(width / 2 - 100, height - player.positionY - 400, 185, 20);
	  //fill("#f50057");
	  //rect(width / 2 - 100, height - THOR.positionY - 400, player.life, 20);
	 // noStroke();
	 // pop();
	//}
  
	//if(gameState===1){
	 // gun.y=mouseY 
  
//}
  
       //thor1.x = camera.position.x-7350


	   if(keyDown("d")){
		   thor1.x += 400;
		 }
		 if(keyDown("a")){
			thor1.x -= 400;
		}
		if(keyDown("w")){
			thor1.y -= 400;
		}
	if(keyDown("s")){
			thor1.y += 400;
		}
		if(keyDown("space") && thor1.y >= 159) {
			thor1.velocityY = -12;
		  }

	

	  drawSprites();

	   
  }


  function spawnVillan(){
	  if(frameCount % 200 === 0) {
		var villan4 = createSprite(600,120,40,10);
        villan4.y =Math.round(random(80,120));
		villan4.addImage(villan4Img);
		villan4.scale = 0.3;
		villan4.valocityX = -4;
	  }
  }