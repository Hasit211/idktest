var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allplayers;
var distance  = 0;
var database;
var car1,car2,car3,car4,array;
var form, player, game;


function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}


function draw(){
if(playerCount === 4){
  game.update(1)
}

if(gameState === 1){
  clear()
  game.play()
}
if(gameState === 2){
game.end()


}


}
