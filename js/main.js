const players = new PlayersAdapter

const highScores = document.getElementById('highscores')
const modal = document.querySelector('.modal-body')
const input = document.querySelector('.player-name-input')

// fetchHighScores()

// const user = new User
const game = new Game

game.start() 

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const playerName = input.value
  console.log(playerName)
  players.saveGame(playerName, game.score, game.date)
  fetchHighScores()

  modal.innerHTML = ""
  const playAgain = document.createElement('button')
  playAgain.className = "play-again"
  playAgain.innerHTML = "Play Again?"
  modal.appendChild(playAgain)
  playAgain.addEventListener('click', () => {
    location.reload();
  })
})

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
        game.gameLevel.addPoints(1) // TODO: update based off baddie in hole
      } else {
        game.updateCurrHP(-1)
      }
    }
}

function fetchHighScores(){
  players.getTopScores().then(players => {
    for (const player of players){
      const li = document.createElement('li')
      li.innerHTML = `${player["name"]} - ${player["score"]} - ${player["play_date"]}`
      highScores.appendChild(li)
    }
  })
}



