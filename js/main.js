const game = new Game
const scoreBoard = document.getElementById('gameScore')
const hpBoard = document.getElementById('currHP')
const maxHPBoard = document.getElementById('maxHP')
const highScores = document.getElementById('highscores')
const modal = document.querySelector('.modal-body')
const players = new PlayersAdapter
const input = document.querySelector('.player-name-input')

fetchHighScores()
game.start()
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  //get score and date and player name input and post to api
  //THEN reprint fetchHighScores()
  
  const playerName = input.value
  console.log(playerName)
  players.saveGame(playerName, game.score, game.date) //todo: rerender high score list

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
        game.gameLevel.addPoints(1) //update based off baddie in hole
        console.log(game.gameLevel.points)
      } else {
        game.updateCurrHP(-1)
      }
    }
}

function fetchHighScores(){
  players.getPlayers().then(players => {
    for (const player of players){
      const li = document.createElement('li')
      li.innerHTML = `${player["name"]} - ${player["score"]} - ${player["play_date"]}`
      highScores.appendChild(li)
    }
  })
}



