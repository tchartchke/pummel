const game = new Game
const scoreBoard = document.getElementById('gameScore')
const hpBoard = document.getElementById('currHP')
const maxHPBoard = document.getElementById('maxHP')

//event listener, load all dom
game.start()
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
    // if hole is "up", set hole drop hole
    if (game.gameLevel.holes[holeNum].up){
      game.gameLevel.holes[holeNum].drop()
      game.updateScore(1)
    } else {
      game.updateCurrHP(-1)
      //TODO: option - lose HP because you hit a blank?

    }
  
}