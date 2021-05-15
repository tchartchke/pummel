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