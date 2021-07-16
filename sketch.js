var spaceCraft
var star
var UFO
var score
var life

function preload(){
  bg=loadImage("images/space.jpg")
  spaceCraftImg = loadImage("images/spaceCraft.png")
  starImg = loadImage("images/star.png")
  asteroidImg = loadImage("images/asteroid.png")
  UFO1Img = loadImage("images/UFO1.png")
  UFO2Img = loadImage("images/UFO2.png")
  UFO3Img = loadImage("images/UFO3.png")
  UFO4Img = loadImage("images/UFO4.png")
  UFO5Img = loadImage("images/UFO5.png")
}


function setup() {
  createCanvas(1000, 600);

  score = 0
  life = 3
  spaceCraft = createSprite(500,500)
  spaceCraft.addImage("spaceCraft",spaceCraftImg)
  spaceCraft.scale=0.5
 
  starGroup = new Group()
  asteroidGroup = new Group()
  UFOgroup = new Group()
}

function draw() {
  background(bg);

  drawSprites()

  textSize(25)
  fill("white")
  text("SCORE:"+score,840,36)
  
  text("lIVES:"+life,40,36)
  if(keyDown(RIGHT_ARROW)){
     spaceCraft.x +=6
  }

  if(keyDown(LEFT_ARROW)){
    spaceCraft.x -=6
 }

  if(starGroup.isTouching(spaceCraft)){
    starGroup[0].destroy()
    score+=20
  }

  if(asteroidGroup.isTouching(spaceCraft)){
     asteroidGroup[0].destroy()
     life-=1
  }
  spawnStars()

  spawnAsteroids()

  spawnUFOs()


 }

function spawnStars(){

  if(frameCount%90===0){
    star=createSprite(random(0,1000),5,10,10)
    star.addImage("star",starImg)
    star.velocityY=7
    star.scale=0.07

    star.lifetime=80
    starGroup.add(star)
  }
}

function spawnAsteroids(){

  if(frameCount%100===0){
    asteroid=createSprite(random(0,1000),5,10,10)
    asteroid.addImage("asteroid",asteroidImg)
    asteroid.velocityY=9
    asteroid.scale=0.35
    asteroid.debug=true
    asteroid.setCollider("circle",0,0,50)
    asteroid.lifetime=80
    asteroidGroup.add(asteroid)
  }
}


function spawnUFOs(){

  if(frameCount%150===0){
    UFO=createSprite(random(0,1000),5,10,10)

  var rand=Math.round(random(1,5))
  
  switch(rand){
      case 1:
        UFO.addImage("UFO1",UFO1Img)
        break
      case 2:
        UFO.addImage("UFO2",UFO2Img)
        break
      case 3:
        UFO.addImage("UFO3",UFO3Img)
        break
      case 4:
        UFO.addImage("UFO4",UFO4Img)
         break
      case 5:
        UFO.addImage("UFO5",UFO5Img)
        break

  }

     
    //asteroid.addImage("asteroid",asteroidImg)
    UFO.velocityY=8
    UFO.scale=0.3 

    UFO.lifetime=80
  
    UFOgroup.add(UFO)
  }

}
