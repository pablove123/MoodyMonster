
  //variables


  let happiness =  80;
  let anger = 80;
  let sleep = 80;
  let hunger = 80;
  let humor = 80;
  let timeLeft = 60


  //Constants
  const maxHappiness =  80;
  const maxAnger = 80;
  const maxSleep = 80;
  const maxHunger = 80;
  const maxHumor = 80;
  const maxTime = 60

  const grunt = new Audio("../audio/grunt.mp3")
  const squeak = new Audio("../audio/squeak.wav")
  const growl = new Audio("../audio/growl.mp3")
  const munch = new Audio("../audio/munch.wav")
  const laugh = new Audio("../audio/laugh.wav")
  const heal = new Audio("../audio/heal.wav")
  const heal1 = new Audio("../audio/heal1.wav")
  const backgroundAudio = new Audio("../audio/background.mp3")

  const jokes = [
    "What kind of monster loves to disco? The boogieman!",
    " Why did the monster need lip balm? His lips were Kraken.",
    "Why couldn’t the mummy go to school with the witch? He couldn’t spell.", "Monsters aren’t usually good at math. Unless you count Dracula.", 
    "Why do ghosts like to ride in elevators? It raises their spirits",
    "What do you get if you cross Bambi with a ghost? Bamboo" 
  ]


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
  const joke = document.getElementById("jokes")


  const fun = document.getElementById("navFun")
  const food = document.getElementById("navFood")
  const music = document.getElementById("navMusic")
  const sleepy = document.getElementById("navSleep")
  const funny = document.getElementById("navJoke")

  const happyBar = document.getElementById("happyBar")
  const hungerBar = document.getElementById("hungerBar")
  const sleepBar = document.getElementById("sleepBar")
  const angerBar = document.getElementById("angerBar")
  const humorBar = document.getElementById("humorBar")

  const countdown = document.getElementById('timeLeft')

  //Event Listeners
  // testbtn.addEventListener("click", checkMood)
  food.addEventListener("click", boostHunger)
  music.addEventListener("click", boostAnger)
  sleepy.addEventListener("click", boostSleep)
  funny.addEventListener("click", boostHumor)
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
  humor = maxHumor;
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
  else if (humor < 40){
    monster.src = "../Pictures/bored.png"; 
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
      angerBar.style.backgroundColor = "red"}
    else if(humor < 40){
      status.innerHTML = `Bored. Tell ${monsterName.value} a joke`;
      status.style.color = "red"
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
  function boostHumor(){
    tellJoke()
    humor = maxHumor
    playLaugh()
  }

  function boostSleep(){
    sleep = maxSleep
    playGrowl()
  }

  function boostHappiness(){
  happiness = maxHappiness 
  playSqueak()
  }

  function startGame(){
    welcome.innerHTML = ""
    let timer = setInterval( function(){
    checkMood()
    countdown.textContent = timeLeft + ' seconds remaining!'
    if (happiness < 0 || anger < 0 || sleep < 0|| hunger < 0 || humor < 0) {
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
    happiness = happiness - 2;
    happyBar.style = `width:${happiness}%`
    anger = anger -2.25;
    angerBar.style = `width:${anger}%`
    sleep--;
    sleepBar.style = `width:${sleep}%`
    hunger = hunger -2.25;
    hungerBar.style = `width:${hunger}%`
    humor = humor -2.25 ;
    humorBar.style = `width:${humor}%`
  }

  function gameOver(){
    status.innerHTML = `${monsterName.value} ran way due to neglect. Try again next time`; 
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
    heal.volume = .2
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
    munch.volume=.5
    munch.play()
  }

  function playSqueak(){
    squeak.volume = .2
    squeak.play()
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
      monsterName.remove()
      addName.remove()
  }

  function tellJoke(){
    let i = [Math.floor(Math.random() * jokes.length)]
    joke.innerHTML = `Joke: ${jokes[i]}`
  }