// setting up an array of text for the conversation
var p = ["Shit! I am never going to make it!","Hey wassup? you seem in a hurry!","Yeah! my dad is at the airport and the AI taxi won't accpet my card! I really need to see him! I haven't seen him in years","I own a taxi, I can take you there.","What? Human Driven taxi's exist? I thought ever since the AI took over driving, people weren't driving anymore!","Yeah, its been a rough couple years. I used to be best taxi driver in Yorknew City but ever since Automated cars became a thing I barely get a ride anymore.","Thats crazy! I was so hyped about AI driven cars that I didnt think how Automated Driving could have affected people in the Automobile Industry","Yeah they started Automated Driving with short haul truck driving, we thought some of our jobs were still safe but in just 3 years it took over taxi service, food delivery and now there is no kind of driving that would earn me any bread.","I have been so focused on finding my dad, I didnt bother to look around and think that people would actually lose jobs beause of AI","that reminds me, your dad is still at the Airport right!","ahhh shit! how did i get lost in this conversation","dont worry I can take you there! remember I used to be the best taxi driver in all of Yorknew","That would be great can you take me there in 10 minutes","You bet!"];

//sounds
var Yes;
var crap;
var fast;

//setting up a button counter to keep track of button clicks and switch scenes
var bCounter = 0; 

//setting up preload to load images and sound
function preload(){
  bgImg = loadImage('https://KshiteeshKandari.github.io/Creative-Research-Project-1/media/convBg.jpg');
  character1 = loadImage('https://KshiteeshKandari.github.io/Creative-Research-Project-1/media/character1.png');
  conV = loadImage('https://KshiteeshKandari.github.io/Creative-Research-Project-1/media/convoBuble.png');
  us = loadImage('https://KshiteeshKandari.github.io/Creative-Research-Project-1/media/us.png');
  Yes = loadSound("https://KshiteeshKandari.github.io/Creative-Research-Project-1/media/Sounds/yes.mp3");
  crap = loadSound("https://KshiteeshKandari.github.io/Creative-Research-Project-1/media/Sounds/Oh! Crap!.mp3");
  fast = loadSound("https://KshiteeshKandari.github.io/Creative-Research-Project-1/media/Sounds/fast.mp3");
  song = loadSound("https://KshiteeshKandari.github.io/Creative-Research-Project-1/media/Sounds/intro.mp3");
}
//play music function
function playMusic(){
  song.play();
  playButton.remove();
}
function setup() {
  createCanvas(700, 450);
  background(bgImg);
 
 
  image(conV,190,150,380,300);
  
  button = createButton("Next");
  button.style("background-color","orange");
  button.size(60,30);
  button.position(420,425);
  button.mousePressed(buttonCounter);   
  //music button
   slider = createSlider(0,1,0.3,0.01);
   slider.position(610,70);
   slider.style('width','80px');
 
   playButton = createButton("Play Song");
      playButton.position(610,40);
      playButton.style('background-color','purple');
      playButton.size(80,30);

   playButton.mousePressed(playMusic);
  //music-----
}

//call button counter to increase the button while also playing sounds for specific buttons
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
    button.remove();
    song.pause();
  }
  
  
  return bCounter;
 
}


//fill the text box with respective button click event
function conversation(){
  fill('white');
  
  text(p[bCounter],210,260,300,100);
   
}




function draw() {
  background(bgImg);
  song.setVolume(slider.value());
  image(conV,190,150,380,300);
 
  conversation();
  
  if (bCounter % 2 == 1){
    image(character1,0,195,250,250);
  }
  if (bCounter % 2 == 0){
    image(us,0,195,250,250);
  }
}
