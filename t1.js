var p = ["Shit! I am never going to make it!","Hey wassup? you seem in a hurry!","Yeah! my dad is at the airport and the AI taxi won't accpet my card! I really need to see him! I haven't seen him in years","I own a taxi, I can take you there.","What? Human Driven taxi's exist? I thought ever since the AI took over driving, people weren't driving anymore!","Yeah, its been a rough couple years. I used to be best taxi driver in Yorknew City but ever since Automated cars became a thing I barely get a ride anymore.","Thats crazy! I was so hyped about AI driven cars that I didnt think how Automated Driving could have affected people in the Automobile Industry","Yeah they started Automated Driving with short haul truck driving, we thought some of our jobs were still safe but in just 3 years it took over taxi service, food delivery and now there is no kind of driving that would earn me any bread.","I have been so focused on finding my dad, I didnt bother to look around and think that people would actually lose jobs beause of AI","that reminds me, your dad is still at the Airport right!","ahhh shit! how did i get lost in this conversation","dont worry I can take you there! remember I used to be the best taxi driver in all of Yorknew","That would be great can you take me there in 10 minutes","You bet!"];

//sounds
var Yes;
var crap;
var fast;


var bCounter = -1; 

function preload(){
  bgImg = loadImage('https://KshiteeshKandari.github.io/Creative-Research-Project-1/media/convBg.jpg');
  character1 = loadImage('https://KshiteeshKandari.github.io/Creative-Research-Project-1/media/character1.png');
  conV = loadImage('https://KshiteeshKandari.github.io/Creative-Research-Project-1/media/convoBuble.png');
  us = loadImage('https://KshiteeshKandari.github.io/Creative-Research-Project-1/media/us.png');
  Yes = loadSound("https://KshiteeshKandari.github.io/Creative-Research-Project-1/media/Sounds/yes.mp3");
  crap = loadSound("https://KshiteeshKandari.github.io/Creative-Research-Project-1/media/Sounds/Oh! Crap!.mp3");
  fast = loadSound("https://KshiteeshKandari.github.io/Creative-Research-Project-1/media/Sounds/fast.mp3");
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
  if (bCounter == 10){
    console.log("music");
    crap.play();
  }
  
  if (bCounter == 0){
    console.log("music");
    crap.play();
  }
  
  if (bCounter == 12){
    console.log("music");
    fast.play();
  }

  if (bCounter == 13){
    noLoop();
  }
  
  
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