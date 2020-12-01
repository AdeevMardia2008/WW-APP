var canvas,database;
var welcomeScreen,signUpScreen,loginScreen,congratulationsScreen,donateScreen,thankYouScreen;
var user;

function preload(){
  
}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  welcomeScreen=new Welcome();
  welcomeScreen.display();
}


function draw(){
  
}
