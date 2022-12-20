
//variables


let happiness =  40;
let anger = 40;
let sleep = 40;
let hunger = 40;

let timeLeft = 60


//Constants
const maxHappiness =  40;
const maxAnger = 40;
const maxSleep = 40;
const maxHunger = 40;
const maxTime = 60

const grunt = new Audio("../audio/grunt.mp3")
const growl = new Audio("../audio/growl.mp3")
const munch = new Audio("../audio/munch.wav")
const laugh = new Audio("../audio/laugh.wav")
const backgroundAudio = new Audio("../audio/background.mp3")

//cached references
let monster = document.getElementById("monster")
let startbtn = document.getElementById("startbtn")
let resetbtn = document.getElementById("resetbtn")
let background = document.getElementById("background")
let status = document.getElementById("status")
let welcome = document.getElementById("welcomeMessage")

let fun = document.getElementById("navFun")
let food = document.getElementById("navFood")
let music = document.getElementById("navMusic")
let sleepy = document.getElementById("navSleep")

let happyBar = document.getElementById("happyBar")
let hungerBar = document.getElementById("hungerBar")
let sleepBar = document.getElementById("sleepBar")
let angerBar = document.getElementById("angerBar")

let countdown = document.getElementById('timeLeft')

//Event Listeners
// testbtn.addEventListener("click", checkMood)
food.addEventListener("click", boostHunger)
music.addEventListener("click", boostAnger)
sleepy.addEventListener("click", boostSleep)
fun.addEventListener("click", boostHappiness)
startbtn.addEventListener("click", startGame)
resetbtn.addEventListener("click", resetGame)
background.addEventListener("click", playBackground)
//functions
render()

function render(){
happiness =  maxHappiness;
anger = maxAnger;
sleep = maxSleep;
hunger = maxHunger;
timeLeft = maxTime
displayMood()
checkMood()
}


function checkMood(){
if (happiness < 20){
  monster.src = "https://pbs.twimg.com/media/FkHXjOdVsAEsK2O?format=png&name=120x120"; 
}
else if (anger < 20){
  monster.src = "https://pbs.twimg.com/media/FkHa9fpUEAAf2qc?format=png&name=120x120"; 
}
else if (sleep < 20){
  monster.src = "https://pbs.twimg.com/media/FkHdKJbUYAAWQ0R?format=png&name=120x120"; 
}
else if (hunger < 20){
  monster.src = "https://pbs.twimg.com/media/FkHb31YUUAA-RRz?format=png&name=120x120"; 
} 
else if (happiness > 35){
  monster.src = "https://pbs.twimg.com/media/FkHWoZsUAAAljuE?format=png&name=120x120"; 
}  
else{
  monster.src = "https://pbs.twimg.com/media/FkHUUZ1UEAAsYJL?format=png&name=120x120"; 
}  
displayMood()
}

function displayMood(){
  if(happiness < 20){
    status.innerHTML = "Sad! Play with your monster"
    status.style.color = "red"
  }
  else if(anger < 20){
    status.innerHTML = "Angry! Play some music to calm them down";
    status.style.color = "red"
    
  }
  else if(sleep < 20){
    status.innerHTML = "Sleepy! Put your monster to sleep"
    status.style.color = "red"
  }
  else if(hunger < 20){
    status.innerHTML = "Hungry! Feed your monster"
    status.style.color = "red"
  }
  else if(happiness > 35){
    status.innerHTML = "Happy!"
  status.style.color = "#20BF55"
}
else if(20 < happiness < 35){
  status.innerHTML = "Doing Alright"
  status.style.color = "#20BF55"
}
}

function boostHunger(){
  hunger = maxHunger 
  playMunch()
}

function boostAnger(){
  anger = maxAnger
  playGrunt()
}

function boostSleep(){
  sleep = maxSleep
  playGrowl()
}

function boostHappiness(){
happiness = maxHappiness 
playLaugh()
}
function startGame(){
  welcome.innerHTML = ""
  let timer = setInterval( function(){
  checkMood()
countdown.textContent = timeLeft + ' seconds remaining!'
if (happiness < 0 || anger < 0 || sleep < 0|| hunger < 0) {
  countdown.textContent = 'Game Over'
  clearInterval(timer)
  gameOver()
}
reduceBars()
timeLeft -= 1
if (timeLeft < 0) {
  countdown.textContent = 'Finished!'
  clearInterval(timer)
  gameWin()
}
}, 1000)
}

function reduceBars(){
happiness --;
happyBar.style = `width:${happiness * 2}%`
anger--;
angerBar.style = `width:${anger *2}%`
sleep--;
sleepBar.style = `width:${sleep *2}%`
hunger--;
hungerBar.style = `width:${hunger*2}%`
}

function gameOver(){
status.innerHTML = "Your Monster ran way due to neglect. Try again next time"
monster.src = ""
console.log("Game over")
}

function gameWin(){
status.innerHTML = "You won! Your monster loves you forever!"
monster.src = "https://pbs.twimg.com/media/FkUEJajUoAA7OE2?format=png&name=120x120"
status.style.color = "#20BF55"
status.style.fontSize = "30px"
}

function resetGame(){
render()
startGame()
}

function playGrunt(){
  grunt.volume=1
  grunt.play()
}
function playGrowl(){
  growl.volume=1
  growl.play()
}
function playLaugh(){
  laugh.volume=1
  laugh.play()
}
function playMunch(){
  munch.volume=1
  munch.play()
}

function playBackground(){
  backgroundAudio.volume = .05
  backgroundAudio.play()
}