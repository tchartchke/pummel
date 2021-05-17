const game = new Game
const scoreBoard = document.getElementById('gameScore')
const hpBoard = document.getElementById('currHP')
const maxHPBoard = document.getElementById('maxHP')
const highScores = document.getElementById('highscores')
const modal = document.querySelector('.modal-body')
const players = new PlayersAdapter

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  console.log("clicked")
  //get score and date and player name input and post to api
  //THEN reprint fetchHighScores()
  //removes form and changes to submitted message. asks if wants to replay?
  modal.innerHTML = ""
  const playAgain = document.createElement('button')
  playAgain.className = "play-again"
  playAgain.innerHTML = "Play Again?"
  modal.appendChild(playAgain)
  playAgain.addEventListener('click', () => {
    location.reload();
  })

})

//event listener, load all dom
// game.start()
// game.fetchLevel()
//monitor game features

// const holes = document.querySelectorAll('.hole');
// let timeUp = false;
document.addEventListener('keydown', (e) => {
  const num = e.key
  if (parseInt(num)){
    const holeNum = `hole${num}`
    const selectedHole = document.querySelector(`.${holeNum}`)
    selectedHole.classList.add('hit')
    bonk(holeNum)
  } else {
    //pause logic?
  }
});

document.addEventListener('keyup', (e) => {
  const num = e.key
  if (parseInt(num)){
    const holeNum = `hole${num}`
    const selectedHole = document.querySelector(`.${holeNum}`)
    selectedHole.classList.remove('hit')
  }
});

function bonk(holeNum) {
    // TODO: will only affect anything if level is still in progress
    if (game.gameLevel.active){
      if (game.gameLevel.holes[holeNum].up){
        game.gameLevel.holes[holeNum].drop()
        game.updateScore(1) //update based off baddie in hole
      } else {
        game.updateCurrHP(-1)
      }
    }
}

function fetchHighScores(){
  highScores.innerHTML = ""
  players.getPlayers().then(players => {
    console.log(typeof players)
    for (const player of players){
      const li = document.createElement('li')
      li.innerHTML = `${player["name"]} - ${player["score"]}`
      highScores.appendChild(li)
    }
  })
}



