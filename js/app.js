//variables

  let happiness =  40;
  let anger = 40;
  let sleep = 40;
  let hunger = 40;

let timeLeft = 10


//Constants
const maxHappiness =  40;
const maxAnger = 40;
const maxSleep = 40;
const maxHunger = 40;
const maxTime = 10

//cached references
let monster = document.getElementById("monster")
let testbtn = document.getElementById("testbtn")
let status = document.getElementById("status")

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
testbtn.addEventListener("click", checkMood)
food.addEventListener("click", boostHunger)
music.addEventListener("click", boostAnger)
sleepy.addEventListener("click", boostSleep)
fun.addEventListener("click", boostHappiness)
//functions
render()

function render(){
  let happiness =  maxHappiness;
  let anger = maxAnger;
  let sleep = maxSleep;
  let hunger = maxHunger;
  let timeLeft = maxTime
  displayMood()
  checkMood()

}


function checkMood(){
  if (happiness < 10){
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
  if(happiness < 10){
    status.innerHTML = "About to run away!!! Make them Happy"
  }
  else if(anger < 20){
    status.innerHTML = "Angry! Play some music to calm them down"
  }
  else if(sleep < 20){
    status.innerHTML = "Sleepy! Put your monster to sleep"
  }
  else if(hunger < 20){
    status.innerHTML = "Hungry! Feed your monster"
  }
  else if(happiness > 35){
    status.innerHTML = "Happy!"
  }
  else if(20 < happiness < 35){
    status.innerHTML = "Doing Alright"
  }
  
}

function boostHunger(){
  console.log("Yum!")
  hunger = maxHunger 
}

function boostAnger(){
  console.log("Im not mad")
  anger = maxAnger
}

function boostSleep(){
  console.log("So woke")
  sleep = maxSleep
}

function boostHappiness(){
  console.log("Wow so happy"); 
  happiness = maxHappiness 
}

let timer = setInterval( function(){
  countdown.textContent = timeLeft + ' seconds remaining!'
  reduceBars()
  checkMood()
  timeLeft -= 1
  if (happiness < 0 || anger < 0 || sleep < 0|| hunger < 0) {
    countdown.textContent = 'Game Over'
    clearInterval(timer)
    gameOver()
  }
  if (timeLeft < 0) {
    countdown.textContent = 'Finished!'
    clearInterval(timer)
    gameWin()
  }
}, 1000)

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
}

function gameWin(){
  status.innerHTML = "You won! Your monster loves you forever!"
  monster.src = "https://pbs.twimg.com/media/FkUEJajUoAA7OE2?format=png&name=120x120"
}