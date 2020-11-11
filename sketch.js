//Create variables here
var dog,happyDog,database,foodS,foodStock
var dogIMG,happyDogImg
var milk
function preload()
{
  dogIMG=loadImage("images/dogImg.png")
 happyDogImg=loadImage("images/dogImg1.png")
 milkIMG = loadImage("images/Milk.png")
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(370,200,30,30)
  dog.addImage(dogIMG)
  dog.scale = 0.2
  
  feed=createSprite(200,70,70,40)
  feed.visible=false;

  milk = createSprite(100,200,40,40)
  milk.addImage(milkIMG)
  milk.scale = 0.1;
 
  database = firebase.database()
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)

  addFood = createSprite(270,70,70,40)
  addFood.visible = false
}


function draw() {  
  background(46, 139, 87)
  drawSprites();
  textSize(20)
  fill("red")
  stroke("black")
  text("remaining milk :"+foodS,240,20)
  textSize(20)
  fill("white")
  stroke("red")
  text("Feed",200,70)
  text("Add Food",270,70)
  
  //add styles here
  fill(255,255,254);
  textSize(15)
  
  if(mousePressedOver(feed)){
    writeStock(foodS);
    dog.addImage(happyDogImg)
    milk.visible = false;
 }
 if(mousePressedOver(addFood)){
  AddFood(foodS);
  dog.addImage(happyDogImg)
  milk.visible = true;
}
 
  }


function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}

function AddFood(y){
  if(y<=0){
    y=y+1;
  }else{
    y=y+1
  }
  database.ref('/').update({
    Food:y
  })
}



