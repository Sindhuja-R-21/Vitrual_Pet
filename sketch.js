//Create variables here
var database, foodS, foodstock, dog, dog1;
function preload()
{
  //load images here
  dogimage=loadImage("images/dogImg.png");
  dog1image=loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  
  dog=createSprite(200,300,100,100);
  dog.addImage(dogimage);
  dog.scale=0.15;

  foodstock=database.ref('Food');
  foodstock.on("value",readStock);
  
}


function draw() { 
  background("blue"); 
if(keyDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dog1image);
}


  drawSprites();
  text("Food Remaining: "+foodS,150,200);
  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}



