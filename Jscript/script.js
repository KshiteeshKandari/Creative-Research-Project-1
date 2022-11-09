var p = ["Shit! I am never going to make it!","Hey wassup? you seem in a hurry!","Yeah! my dad is at the airport and the AI taxi won't accpet my card! I really need to see him! haven't seen him in years","I own a taxi, I can take you there.","What? Human Driven taxi's exist? I thought ever since the AI took over the industry I thought people werent driving anymore!","Yeah, its been a rough couple years. I used to be best taxi driver in Yorknew City but ever since Automated cars became a thing I barely get a ride anymore.","Thats crazy! it totally skipped my mind how Automated Driving could have affected people in the industry","Yeah they started Automated Driving with short haul truck driving, we thought out jobs were still safe but in just 3 years it took overtaxi service, food delivery and now there is no kind of driving that would earn me any bread.","I have been so focused on finding my dad, I didnt notice how people were being affected by Automated Driving!","that remind me, your dad is still at the Airport right!","ahhh shit! how did i get lost in this conversation","dont worry I can take you there! remember I used to be the best taxi driver in all of Yorknew","That would be great can you take me there in 10 minutes","You bet!"];

//sounds
var Yes;
var crap;
var fast;


var bCounter = -1; 

function preload(){
  bgImg = loadImage('conc.jpg');
  character1 = loadImage('character1.png');
  conV = loadImage('convoBuble.png');
  us = loadImage('us.png');
  // Yes = loadSound("yes.mp3");
  // crap = loadSound("../Sounds/crap.mp3");
  // fast = loadSound("../Sounds/.mp3");
}

function setup() {
  createCanvas(700, 450);
  background(bgImg);
 
 
  image(conV,190,150,380,300);
  
  button = createButton("Next");
  button.mousePressed(buttonCounter);
  
  
  
  
  
  
  
}

function buttonCounter(){
  bCounter= bCounter+1;
  console.log(bCounter);
  
  //play sounds
  // if (bCounter == 10){
  //   console.log("music");
  //   crap.play();
  // }
  
  // if (bCounter == 0){
  //   console.log("music");
  //   crap.play();
  // }
  
  // if (bCounter == 12){
  //   console.log("music");
  //   fast.play();
  // }
  
  
  return bCounter;
 
}


function conversation(){
  fill('white');
  
  text(p[bCounter],210,260,300,100);
  

  
}




function draw() {
  background(bgImg);
  image(conV,190,150,380,300);
 
  conversation();
  
  if (bCounter % 2 == 1){
    image(character1,0,195,250,250);
  }
  if (bCounter % 2 == 0){
    image(us,0,195,250,250);
  }
  
  // if (bCounter == 4){
  //   toGame();
  // }
  
  
}