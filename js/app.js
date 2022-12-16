//variables
let monsterMood = {
  happiness: 100,
  anger: 100,
  sleep: 100, 
  hunger: 100,
}
//Constants

//cached references
let monster = document.getElementById("monster")
let testbtn = document.getElementById("testbtn")
let status = document.getElementById("status")

let fun = document.getElementById("navFun")
let food = document.getElementById("navFood")
let music = document.getElementById("navMusic")
let sleep = document.getElementById("navSleep")

//Event Listeners
testbtn.addEventListener("click", checkMood)
food.addEventListener("click", boostHunger)
music.addEventListener("click", boostAnger)
sleep.addEventListener("click", boostSleep)
fun.addEventListener("click", boostHappiness)
//functions
render()
displayMood()

function render(){
   let monsterMood = {
    happiness: 100,
    anger: 100,
    sleep: 100, 
    hunger: 100,
  }
}


function checkMood(){
  if (monsterMood.happiness < 30){
    monster.src = "https://pbs.twimg.com/media/FkHXjOdVsAEsK2O?format=png&name=120x120"; 
  }
  else if (monsterMood.anger < 30){
    monster.src = "https://pbs.twimg.com/media/FkHa9fpUEAAf2qc?format=png&name=120x120"; 
  }
  else if (monsterMood.sleep < 30){
    monster.src = "https://pbs.twimg.com/media/FkHdKJbUYAAWQ0R?format=png&name=120x120"; 
  }
  else if (monsterMood.hunger < 30){
    monster.src = "https://pbs.twimg.com/media/FkHb31YUUAA-RRz?format=png&name=120x120"; 
  } 
  else if (monsterMood.happiness > 90){
    monster.src = "https://pbs.twimg.com/media/FkHWoZsUAAAljuE?format=png&name=120x120"; 
  }  
  else{
    monster.src = "https://pbs.twimg.com/media/FkHUUZ1UEAAsYJL?format=png&name=120x120"; 
  }  
  displayMood()
  console.log(monsterMood)
}

function displayMood(){
  if(monsterMood.happiness < 30){
    status.innerHTML = "About to run away!!! Make them Happy"
  }
  else if(monsterMood.anger < 30){
    status.innerHTML = "Angry! Play some music to calm them down"
  }
  else if(monsterMood.sleep < 30){
    status.innerHTML = "Sleepy! Put your monster to sleep"
  }
  else if(monsterMood.hunger < 30){
    status.innerHTML = "Hungry! Feed your monster"
  }
  else if(monsterMood.happiness > 90){
    status.innerHTML = "Happy!"
  }
  
}

function boostHunger(){
  console.log("Yum!")
}

function boostAnger(){
  console.log("Im not mad")
}

function boostSleep(){
  console.log("So woke")
}

function boostHappiness(){
  console.log("Wow so happy")
}
