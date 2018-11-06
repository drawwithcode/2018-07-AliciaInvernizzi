var mic;
var myFlame;
var myMonster;

function preload(){
  // put preload code here
  myMonster = loadImage('./assets/quiet.png');
  myFlame = loadImage('./assets/fire.png');

}


function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);

  mic = new p5.AudioIn();

  mic.start();

  frameRate(30);

}


function draw() {
  // put drawing code here
  background(116,14,249);

  var vol = mic.getLevel();

  console.log(vol);

  if (frameCount < 130 || vol < 0.1) {
    imageMode(CENTER);
    image(myMonster, windowWidth/2, windowHeight/2+130, myMonster.width/18, myMonster.height/18);
  } else if (vol > 0.1) {
    imageMode(CENTER);
    image(myFlame, windowWidth/2, windowHeight/2+130, myFlame.width/18, myFlame.height/18);
  }

if (frameCount < 130) {
  textFont("Chewy");
  textSize(130);
  fill(255,183,0);
  textAlign(CENTER);
  text("Get angry!", windowWidth/2, 170);
  textSize(30);
  text("Let the microphone know how angry you are", windowWidth/2, 240);
} else if (frameCount > 130 && vol < 0.1) {
  textSize(130);
  text("That's not enough", windowWidth/2, 170);
} else if (frameCount > 130 && vol > 0.1) {
  textSize(130);
  text("Calm down!", windowWidth/2, 170);
}


}
