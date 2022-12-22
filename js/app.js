
//variables


let happiness =  80;
let anger = 80;
let sleep = 80;
let hunger = 80;

let timeLeft = 60


//Constants
const maxHappiness =  80;
const maxAnger = 80;
const maxSleep = 80;
const maxHunger = 80;
const maxTime = 60

const grunt = new Audio("../audio/grunt.mp3")
const growl = new Audio("../audio/growl.mp3")
const munch = new Audio("../audio/munch.wav")
const laugh = new Audio("../audio/laugh.wav")
const heal = new Audio("../audio/heal.wav")
const heal1 = new Audio("../audio/heal1.wav")
const backgroundAudio = new Audio("../audio/background.mp3")


//cached references
const monster = document.getElementById("monster")
const startbtn = document.getElementById("startbtn")
const resetbtn = document.getElementById("resetbtn")
const addNamebtn = document.getElementById("addName")
const background = document.getElementById("background")
const status = document.getElementById("status")
const welcome = document.getElementById("welcomeMessage")
const name = document.getElementById("name")
const monsterName = document.getElementById("monsterName")


const fun = document.getElementById("navFun")
const food = document.getElementById("navFood")
const music = document.getElementById("navMusic")
const sleepy = document.getElementById("navSleep")

const happyBar = document.getElementById("happyBar")
const hungerBar = document.getElementById("hungerBar")
const sleepBar = document.getElementById("sleepBar")
const angerBar = document.getElementById("angerBar")

const countdown = document.getElementById('timeLeft')

//Event Listeners
// testbtn.addEventListener("click", checkMood)
food.addEventListener("click", boostHunger)
music.addEventListener("click", boostAnger)
sleepy.addEventListener("click", boostSleep)
fun.addEventListener("click", boostHappiness)
startbtn.addEventListener("click", startGame)
resetbtn.addEventListener("click", resetGame)
background.addEventListener("click", playBackground)
addNamebtn.addEventListener("click", changeName)

//functions
render()

function render(){
happiness =  maxHappiness;
anger = maxAnger;
sleep = maxSleep;
hunger = maxHunger;
timeLeft = maxTime
checkMood()
}


function checkMood(){
if (happiness < 40){
  monster.src = "../Pictures/sad.png"; 
}
else if (anger < 40){
  monster.src = "../Pictures/angry.png"; 
}
else if (sleep < 40){
  monster.src = "../Pictures/tired.png"; 
}
else if (hunger < 40){
  monster.src = "../Pictures/hungry.png"; 
} 
else if (happiness > 65){
  monster.src = "../Pictures/happy.png"; 
}  
else{
  monster.src = "../Pictures/normal.png"; 
}  
displayMood()
}

function displayMood(){
  if(happiness < 40){
    status.innerHTML = `Sad! Play with ${monsterName.value}`
    status.style.color = "red"
    happyBar.style.backgroundColor = "red"
  }
  else if(anger < 40){
    status.innerHTML = `Angry! Play some music to calm ${monsterName.value} down`;
    status.style.color = "red"
    angerBar.style.backgroundColor = "red"

  }
  else if(sleep < 40){
    status.innerHTML = `Sleepy! Put  ${monsterName.value} to sleep`
    status.style.color = "red"
    sleepBar.style.backgroundColor = "red"
    
  }
  else if(hunger < 40){
    status.innerHTML = `Hungry! Feed ${monsterName.value}`
    status.style.color = "red"
    hungerBar.style = "color: red"
  }
  else if(happiness > 65){
    status.innerHTML = "Happy!"
  status.style.color = "#20BF55"
}
else if(40 < happiness < 65){
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
  playheal()
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
happiness = happiness - 5;
happyBar.style = `width:${happiness}%`
anger = anger -3;
angerBar.style = `width:${anger}%`
sleep = sleep - 2;
sleepBar.style = `width:${sleep}%`
hunger = hunger -2.5;
hungerBar.style = `width:${hunger}%`
}

function gameOver(){
status.innerHTML = `${monsterName.value}ran way due to neglect. Try again next time`; 
monster.src = ""
}

function gameWin(){
status.innerHTML = `You won! ${monsterName.value} loves you forever!`
status.style.color = "#20BF55"
status.style.fontSize = "30px"
monster.src = "../Pictures/end1.png"
}

function resetGame(){
render()
startGame()
}

function playheal(){
  grunt.volume=1
  heal.play()
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
  backgroundAudio.volume = .025
  backgroundAudio.play()
}

function changeName(){
  name.innerHTML = `${monsterName.value}`
  removeEl()
}

function removeEl(){
  // let test = 0
  // if(test == 1){
  //   return
  // } else {
    //  test = 1
    monsterName.remove()
    addName.remove()
}