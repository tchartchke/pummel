const players = new PlayersAdapter
const notes = new NotesAdapter

const highScores = document.querySelector('.modal-footer')
const modal = document.querySelector('.modal-body')
const input = document.querySelector('.player-name-input')
const save = document.getElementById('save-player')
const note = document.getElementById('notes')

// const user = new User
const game = new Game

// game.start() 

save.addEventListener('submit', (e) => {
  e.preventDefault();
  const playerName = input.value
  players.saveGame(playerName, game.score, game.date)

  save.innerHTML = "Saved! Thanks for Playing"
  //TODO: make button visible to fetch high scores fetchHighScores()
})

note.addEventListener('submit', (e) => {
  e.preventDefault();
  const cmt = document.querySelector('#notes .comment').value
  const lvl = document.querySelector('#notes select').value
  notes.submitNote(cmt, lvl);

  const btn = document.getElementById('feedbackbtn')
  cmt.value = ""
  btn.value = "Submitted! Please Submit Another"

})

document.getElementById('play-again').addEventListener('click', () => {
  location.reload();
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

  const scoreTitle = document.createElement('h2')
  scoreTitle.innerHTML = "High Scores"

  const ul = document.createElement('ul')
  highScores.appendChild(ul)
  players.getTopScores().then(players => {
    for (const player of players){
      const li = document.createElement('li')
      li.innerHTML = `${player["name"]} - ${player["score"]} - ${player["play_date"]}`
      ul.appendChild(li)
    }
  })
}



