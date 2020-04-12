let keyboardSounds=document.querySelector('#keyboardSounds');
let  bd = document.querySelector('#bd');
let  sd = document.querySelector('#sd');
let  rim = document.querySelector('#rim');
let  hho = document.querySelector('#hho');
let  hhc = document.querySelector('#hhc');
let  tomh = document.querySelector('#tomh');
let  tomm = document.querySelector('#tomm');
let  toml = document.querySelector('#toml');
let  ride = document.querySelector('#ride');
let  crash = document.querySelector('#crash');


function bdPlay(){
  bd.play();
}

function sdPlay(){
    sd.play();
  }

function rimPlay(){
  rim.play();
}

function hhoPlay(){
    hho.play();
  }

function hhcPlay(){
    hhc.play();
  }

function tomhPlay(){
    tomh.play();
  }

function tommPlay(){
    tomm.play();
  }

function tomlPlay(){
    toml.play();
  }

function ridePlay(){
    ride.play();
  }

function crashPlay(){
    crash.play();
  }


  keyboardSounds.addEventListener('keyup', function(event){

if (event.key==1) {
    bd.play();
}
else if (event.key==2) {
    sd.play();
}
else if (event.key==3) {
    rim.play();
}
else if (event.key==4) {
    hho.play();
}
else if (event.key==5) {
    hhc.play();
}
else if (event.key==6) {
    tomh.play();
}
else if (event.key==7) {
    tomm.play();
}
else if (event.key==8) {
    toml.play();
}
else if (event.key==9) {
    ride.play();
}
else if (event.key==0) {
    crash.play();
}
else {
    alert('Wrong key pressed.');
}
  });
 