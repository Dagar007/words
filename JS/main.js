window.addEventListener('load',init);

//Globals
let time= 5;
let score =0;
let isPlaying;

//DOM Elements
const wordInput=document.querySelector('#word-input');
const currentWord=document.querySelector('#current-word');
const scoreDisplay=document.querySelector('#score');
const timeDisplay=document.querySelector('#time');
const message=document.querySelector('#message');
const seconds=document.querySelector('#seconds');


const words =[
  'hat',
  'river',
  'lucky',
  'aeroplane',
  'statue',
  'stubborn',
  'to',
  'for',
  'this',
  'candybar',
  'establishment',
  'security',
  'india',
  'javascript',
  'java',
  'C#',
  'SQL',
  'management',
  'studio',
  'chair',
  'table',
  'computer',
  'Czechoslovakia',
  'europe',
  'japan',
  'uk',
  'rupee',
  'azure',
  'Initialise',
  'word'

];
// Initialise word
function init(){
  showWord(words);
  wordInput.addEventListener('input',startMatch);
  setInterval(countdown, 1000);
  setInterval(checkStaus,50);
}

function startMatch() {
  if(matchWord()){
   isPlaying=true;
   time=6;
   showWord(words);
   wordInput.value='';
   score++;
  }
  if(score===-1){
    scoreDisplay.innerHTML=0;
  }else{
  scoreDisplay.innerHTML=score;
  }
}
function matchWord(){
  if(wordInput.value === currentWord.innerHTML){
    message.innerHTML ='Correct!!!'
    return true;
  }else{
    message.innerHTML =''
    return false;
  }
}
//Pick and show random word

function showWord(words){
  const randIndex= Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randIndex];
}

function countdown(){
  if(time>0){
    time--;
  } else if(time===0){
    isPlaying= false;
  }
timeDisplay.innerHTML =time;
}

function checkStaus(){
  if(!isPlaying && time===0){
    message.innerHTML= 'Game Over!!!'
    score=-1;
  }
}