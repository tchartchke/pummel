const players = new PlayersAdapter
const notes = new NotesAdapter

const highScores = document.querySelector('.modal-footer')
const modal = document.querySelector('.modal-body')
const input = document.querySelector('.player-name-input')
const save = document.getElementById('save-player')
const note = document.getElementById('notes')
const startbtn = document.querySelector('.pushable')

const game = new Game

startbtn.addEventListener('click', () => {
  document.getElementById('startbutton').style.display = "none"
  setTimeout(() => {
    game.start()
  }, 2000);
})

save.addEventListener('submit', (e) => {
  e.preventDefault();
  const playerName = input.value
  players.saveGame(playerName, game.score, game.date).then(() => fetchHighScores())
  save.innerHTML = "Saved! Thanks for Playing"
})

note.addEventListener('submit', (e) => {
  e.preventDefault();
  const cmt = document.querySelector('#notes .comment')
  const lvl = document.querySelector('#notes select')
  notes.submitNote(cmt.value, lvl.value);

  const message = document.getElementById('cmt-msg')
  cmt.value = ""
  lvl.value = 1
  message.innerHTML = "Sent! Thank you for the feedback!"
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
    if (game.gameLevel && game.gameLevel.active){
      if (game.gameLevel.holes[holeNum].up){
        game.gameLevel.holes[holeNum].drop()
        game.gameLevel.addPoints(1) // TODO: update based off baddie lvl
      } else {
        game.updateCurrHP(-1)
      }
    }
}

function fetchHighScores(){
  const scoreTitle = document.createElement('h2')
  scoreTitle.innerHTML = "High Scores"
  highScores.appendChild(scoreTitle)
  highScores.style.display = "block"
  
  const scores = document.createElement('div')
  scores.className = "scores"
  highScores.appendChild(scores)
  
  highScores.appendChild(scores)
  players.getTopScores().then(players => {
    for (const player of players){
      const div = document.createElement('div')
      div.innerHTML = `<div>${player["name"]}</div><span class="line"></span><div>${player["score"]}</div>`
      scores.appendChild(div)

    }
  })
}



