var maze1,maze2,maze3,maze4,maze5,maze6,maze7,maze8,maze9,maze10,maze11,maze12,maze13,maze14;
var maze15,maze16,maze17,maze18,maze19,maze20,maze21,maze22,maze23,maze24,maze25,maze26,maze27,maze28;
var maze29,maze30,maze31;
var man, wallGroup,mazeGroup;
var virus1,virus2,virus3,virus4;
var virus1Img, virus2Img, virus3Img, virus4Img;
var wall1,wall2,wall3,wall4;
var man1Img;
var house,houseImg;
var dot1, capsuleImg;
var dot2,dot3,dot4,dot4,dot5,dot6,dot7,dot8,dot9,dot10,dot11,dot12,dot13,dot14,dot15,dot16,dot17,dot18,dot19;
var dot20,dot21,dot22,dot23,dot24,dot25,dot26,dot28,dot29,dot30,dot31,dot32,dot33,dot34,dot35,dot36,dot37,dot38,dot39,dot40;
var dot41,dot42,dot43,dot44,dot45,dot46;
var dotGroup;
var  gameState="start";
var live1,live2,live3, liveImg,lives=3;
var start,startImg,bg,bgImg;
var score=0;



function preload(){
  virus1Img = loadImage("2ndImg.png")
  virus2Img = loadImage("virus2.png")
  virus3Img = loadImage("virus3.png")
  virus4Img = loadImage("virus4.png")
  houseImg = loadImage("house.png")
  man1Img = loadAnimation("man1.png","man2.png","man3.png");
  capsuleImg= loadImage("capsule.png")
  liveImg = loadImage("live.png")
  bgImg = loadImage("bg.png")
  startImg = loadImage("START.png")

}
function setup(){
  createCanvas(1100,500)
  
  man= createSprite(50,440,10,10)
  man.addAnimation("walking", man1Img)
  man.scale=0.1;
  mazeGroup = createGroup()
  wallGroup = createGroup();
  dotGroup = createGroup();
  wall1 = createSprite(350,300,100,10)
  wall2 = createSprite(350,350,100,10)
  wall3 = createSprite(300,325,10,50)
  wall4 = createSprite(400,325,10,50)
  wallGroup.add(wall1)
  wallGroup.add(wall2)
  wallGroup.add(wall3)
  wallGroup.add(wall4)

  virus1 = createSprite(325,320,10,10)
  virus1.addImage(virus1Img)
  virus1.scale=0.2;
  virus2 = createSprite(355,320,10,10)
  virus2.addImage(virus2Img)
  virus2.scale=0.2;
  virus3 = createSprite(325,320,10,10)
  virus3.addImage(virus3Img)
  virus3.scale=0.2;
  virus4 = createSprite(325,320,10,10)
  virus4.addImage(virus4Img)
  virus4.scale=0.2;
  
  //corners
  maze1 = createSprite(650,5,1300,10)
  maze2 = createSprite(5,250,10,600)
  maze3 = createSprite(1095,250,10,600)
  maze4 = createSprite(650,495,1300,10)
  //down 
  maze5 = createSprite(166,450,40,10)
  maze6 = createSprite(216,465,10,70)
  maze7 = createSprite(266,450,40,10)
  maze8 = createSprite(316,465,10,70)
  maze9 = createSprite(406,450,120,10)
  maze10 = createSprite(496,465,10,70)
  maze11 = createSprite(636,450,200,10)
  maze12 = createSprite(766,465,10,120)
  maze13 = createSprite(916,450,290,10)
 //upper
  maze14 = createSprite(200,50,300,10)
  maze15 = createSprite(550,50,300,10)
  maze16 = createSprite(900,50,300,10)
  //middle
  //rect
  maze17 = createSprite(400,90,200,10)
  maze18 = createSprite(400,190,200,10)
  maze19 = createSprite(300,140,10,110)
  maze20 = createSprite(500,140,10,110)
  //square
  maze21 = createSprite(150,100,150,10)
  maze22 = createSprite(150,250,150,10)
  maze23 = createSprite(75,175,10,160)
  maze24 = createSprite(225,175,10,160)
  //random shape
  maze25 = createSprite(700,100,200,10)
  maze26 = createSprite(600,145,10,100)
  maze27 = createSprite(600,200,100,10)
  maze28 = createSprite(800,145,10,100)
  maze29 = createSprite(800,200,100,10)
  maze30 = createSprite(705, 155,10,112)

  mazeGroup.add(maze1)
  mazeGroup.add(maze2)
  mazeGroup.add(maze3)
  mazeGroup.add(maze4)
  mazeGroup.add(maze5)
  mazeGroup.add(maze6)
  mazeGroup.add(maze7)
  mazeGroup.add(maze8)
  mazeGroup.add(maze9)
  mazeGroup.add(maze10)
  mazeGroup.add(maze11)
  mazeGroup.add(maze12)
  mazeGroup.add(maze13)
  mazeGroup.add(maze14)
  mazeGroup.add(maze15)
  mazeGroup.add(maze16)
  mazeGroup.add(maze17)
  mazeGroup.add(maze18)
  mazeGroup.add(maze19)
  mazeGroup.add(maze20)
  mazeGroup.add(maze21)
  mazeGroup.add(maze22)
  mazeGroup.add(maze23)
  mazeGroup.add(maze24)
  mazeGroup.add(maze25)
  mazeGroup.add(maze26)
  mazeGroup.add(maze27)
  mazeGroup.add(maze28)
  mazeGroup.add(maze29)
  mazeGroup.add(maze30)
  mazeGroup.add(maze1)
  mazeGroup.add(maze1)
  mazeGroup.add(maze1)
  mazeGroup.add(maze1)
  mazeGroup.add(maze1)
  mazeGroup.add(maze1)
  mazeGroup.add(maze1)
  mazeGroup.add(maze1)
  mazeGroup.add(maze1)
  mazeGroup.add(maze1)
  mazeGroup.add(maze1)
  mazeGroup.add(maze1)
  mazeGroup.add(maze1)
  mazeGroup.add(maze1)
  mazeGroup.add(maze1)



  

  live1 = createSprite(1000,30,10,10)
  live1.addImage(liveImg)
  live1.scale=0.1;
  live2 = createSprite(1030,30,10,10)
  live2.addImage(liveImg)
  live2.scale=0.1;

  live3 = createSprite(1060,30,10,10)
  live3.addImage(liveImg)
  live3.scale=0.1;




  house = createSprite(60,440,30,30)
  house.addImage(houseImg)
  house.scale=0.6
  dot1 = createSprite(50,30,10,10)
  dot1.addImage(capsuleImg)
  dot1.scale=0.1

  dot2 = createSprite(80,30,10,10)
  dot2.addImage(capsuleImg)
  dot2.scale=0.1

  dot3 = createSprite(110,30,10,10)
  dot3.addImage(capsuleImg)
  dot3.scale=0.1


  dot4 = createSprite(140,30,10,10)
  dot4.addImage(capsuleImg)
  dot4.scale=0.1

  dot5 = createSprite(170,30,10,10)
  dot5.addImage(capsuleImg)
  dot5.scale=0.1

  dot6 = createSprite(200,30,10,10)
  dot6.addImage(capsuleImg)
  dot6.scale=0.1

  dot7 = createSprite(230,30,10,10)
  dot7.addImage(capsuleImg)
  dot7.scale=0.1

  dot8 = createSprite(260,30,10,10)
  dot8.addImage(capsuleImg)
  dot8.scale=0.1

  dot9 = createSprite(290,30,10,10)
  dot9.addImage(capsuleImg)
  dot9.scale=0.1

  dot10 = createSprite(320,30,10,10)
  dot10.addImage(capsuleImg)
  dot10.scale=0.1

  dot11 = createSprite(350,30,10,10)
  dot11.addImage(capsuleImg)
  dot11.scale=0.1

  dot12 = createSprite(380,30,10,10)
  dot12.addImage(capsuleImg)
  dot12.scale=0.1

  dot13 = createSprite(410,30,10,10)
  dot13.addImage(capsuleImg)
  dot13.scale=0.1

  dot14 = createSprite(440,30,10,10)
  dot14.addImage(capsuleImg)
  dot14.scale=0.1

  dot15 = createSprite(470,30,10,10)
  dot15.addImage(capsuleImg)
  dot15.scale=0.1

  dot16 = createSprite(500,30,10,10)
  dot16.addImage(capsuleImg)
  dot16.scale=0.1

  dot17 = createSprite(530,30,10,10)
  dot17.addImage(capsuleImg)
  dot17.scale=0.1

  dot18 = createSprite(560,30,10,10)
  dot18.addImage(capsuleImg)
  dot18.scale=0.1

  dot19 = createSprite(590,30,10,10)
  dot19.addImage(capsuleImg)
  dot19.scale=0.1

  dot20 = createSprite(620,30,10,10)
  dot20.addImage(capsuleImg)
  dot20.scale=0.1

  dot21 = createSprite(650,30,10,10)
  dot21.addImage(capsuleImg)
  dot21.scale=0.1

  dot22 = createSprite(680,30,10,10)
  dot22.addImage(capsuleImg)
  dot22.scale=0.1

  dot23 = createSprite(710,30,10,10)
  dot23.addImage(capsuleImg)
  dot23.scale=0.1

  dot25 = createSprite(740,30,10,10)
  dot25.addImage(capsuleImg)
  dot25.scale=0.1

  dot24 = createSprite(770,30,10,10)
  dot24.addImage(capsuleImg)
  dot24.scale=0.1

  dot26 = createSprite(800,30,10,10)
  dot26.addImage(capsuleImg)
  dot26.scale=0.1

  dot27 = createSprite(830,30,10,10)
  dot27.addImage(capsuleImg)
  dot27.scale=0.1

  dot28 = createSprite(860,30,10,10)
  dot28.addImage(capsuleImg)
  dot28.scale=0.1

  dot29 = createSprite(890,30,10,10)
  dot29.addImage(capsuleImg)
  dot29.scale=0.1
  
  dot30 = createSprite(920,30,10,10)
  dot30.addImage(capsuleImg)
  dot30.scale=0.1

  dot31 = createSprite(950,30,10,10)
  dot31.addImage(capsuleImg)
  dot31.scale=0.1

  start = createSprite(900,200,10,10)
  start.addImage(startImg)
  start.scale=0.5
 
 
  




  dotGroup.add(dot1)


  

  



}
function draw(){
  
  background(bgImg)
  mazeGroup.setVisibleEach(false);
  
  if(mousePressedOver(start)){
    background("black")
    start.visible=false;
    gameState="play"
  }

  drawSprites()
  MazeGroup.setColorEach("blue")
  if(gameState==="play"){
    mazeGroup.setVisibleEach(true);
    
 

  wallGroup.setColorEach("golden")
 
 
  textSize(20)
  stroke("yellow")
  text(" "+score,1050,480)

  if(keyDown("up")){
    man.y= man.y-2;
    man.rotation=360
  }
  if(keyDown("down")){
    man.y= man.y+2;
  }
  if(keyDown("right")){
    man.x= man.x+2;
  }
  if(keyDown("left")){
    man.x= man.x-2;
  }
  medicineCleaner()
  virusFunc()
  livesF()
 lifeLooser()
}
  

}
function medicineCleaner(){
 
  if(man.isTouching(dot1)){
    dot1.destroy()
    score+=1;
  }
  if(man.isTouching(dot2)){
    dot2.destroy()
    score+=1;
  }
  if(man.isTouching(dot3)){
    dot3.destroy()
    score+=1;
  }
  if(man.isTouching(dot4)){
    dot4.destroy()
    score+=1;
  }
  if(man.isTouching(dot5)){
    dot5.destroy()
    score+=1;
  }
  if(man.isTouching(dot6)){
    dot6.destroy()
    score+=1;
  }
  if(man.isTouching(dot7)){
    dot7.destroy()
    score+=1;
  }
  if(man.isTouching(dot8)){
    dot8.destroy()
    score+=1;
  }
  if(man.isTouching(dot9)){
    dot9.destroy()
    score+=1;
  }
  if(man.isTouching(dot1)){
    dot1.destroy()
    score+=1;
  }
  if(man.isTouching(dot10)){
    dot10.destroy()
    score+=1;
  }
  if(man.isTouching(dot11)){
    dot11.destroy()
    score+=1;
  }
  if(man.isTouching(dot12)){
    dot12.destroy()
    score+=1;
  }
  if(man.isTouching(dot13)){
    dot13.destroy()
    score+=1;
  }
  if(man.isTouching(dot14)){
    dot14.destroy()
    score+=1;
  }
  if(man.isTouching(dot15)){
    dot15.destroy()
    score+=1;
  }
  if(man.isTouching(dot16)){
    dot16.destroy()
    score+=1;
  }
  if(man.isTouching(dot17)){
    dot17.destroy()
    score+=1;
  }
  if(man.isTouching(dot18)){
    dot18.destroy()
    score+=1;
  }
  if(man.isTouching(dot19)){
    dot19.destroy()
    score+=1;
  }
  if(man.isTouching(dot20)){
    dot20.destroy()
    score+=1;
  }
  if(man.isTouching(dot21)){
    dot21.destroy()
    score+=1;
  }
  if(man.isTouching(dot22)){
    dot22.destroy()
    score+=1;
  }
  if(man.isTouching(dot23)){
    dot23.destroy()
    score+=1;
  }
  if(man.isTouching(dot24)){
    dot24.destroy()
    score+=1;
  }
  if(man.isTouching(dot25)){
    dot25.destroy()
    score+=1;
  }
  if(man.isTouching(dot26)){
    dot26.destroy()
    score+=1;
  }
  if(man.isTouching(dot27)){
    dot27.destroy()
    score+=1;
  }
  if(man.isTouching(dot28)){
    dot28.destroy()
    score+=1;
  }
  if(man.isTouching(dot29)){
    dot29.destroy()
    score+=1;
  }
  if(man.isTouching(dot30)){
    dot30.destroy()
    score+=1;
  }
  if(man.isTouching(dot31)){
    dot31.destroy()
    score+=1;
  }
  function virusFunc(){
    if(virus1.isTouching(maze3)){
      virus1.velocityX=-2;

    }

    if(virus1.isTouching(maze2)){
      virus1.velocityY=-2;

      

    }

    if(virus2.isTouching(maze1)){
      virus2.velocityX=-2;


    }
    if(virus2.isTouching(maze4)){
      virus2.velocityY=2;


    }
    if(virus3.isTouching(maze2)){
      virus3.velocityX=2;


    }
    if(virus3.isTouching(maze1)){
      virus3.velocityY=-2;


    }
    if(virus4.isTouching(maze4)){
      virus4.velocityX=-2;


    }
    if(virus4.isTouching(maze3)){
      virus4.velocityY=2;
    }


    }
    

  
  function livesF(){
    if(lives===2){
      live1.visible=false;
    }
    if(lives===1){
      live2.visible=false;
    }
    if(lives===0){
      live3.visible=false;
      mazeGroup.setVisibleEach(false)
      gameState="end"
      
    }

  }
  function lifelooser(){
    if(man.isTouching(virus1)){
      lives=lives-1;
      man.x=50
      man.y=440;
      
    }
    if(man.isTouching(virus2)){
      lives=lives-1;
      man.x=50
      man.y=440;
      
    }
    if(man.isTouching(virus3)){
      lives=lives-1;
      man.x=50
      man.y=440;
      
    }
    if(man.isTouching(virus4)){
      lives=lives-1;
      man.x=50
      man.y=440;
      
    }
  }



}