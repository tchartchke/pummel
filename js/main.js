const game = new Game
const scoreBoard = document.getElementById('gameScore')
const hpBoard = document.getElementById('currHP')
const maxHPBoard = document.getElementById('maxHP')

game.start()
//monitor game features


const holes = document.querySelectorAll('.hole');
let timeUp = false;
document.addEventListener('keydown', bonk);

function bonk(e) {
  const num = e.code.slice(-1)
  if (parseInt(num)){
    const holeNum = `hole${num}`
    // if hole is "up", set hole drop hole
    if (game.gameLevel.holes[holeNum].up){
      game.gameLevel.holes[holeNum].drop()
      game.updateScore(1)
      console.log(`you hit ${holeNum} that is up. UP is now set to ${game.gameLevel.holes[holeNum].up}\nYour score is now ${game.score}`)
    } else {
      game.updateCurrHP(-1)
      console.log(`you hit a blank spot. Your HP is now ${game.currHP}`)
      //TODO: option - lose HP because you hit a blank?

    }
  } else {
    // pause action 
  }
}


// function bonk(e) {
//   const num = e.code.slice(-1)
//   if (parseInt(num))
//   {
//     holeNum = `hole${num}`
//     const tgt = document.querySelector(`.${holeNum}`)
//     if (tgt.classList.contains("up")){
//       game.updateScore(1)
//       scoreBoard.innerHTML = game.score
//       tgt.classList.remove('up');
//     } else{
//       game.updateCurrHP(-1)
//       hpBoard.innerHTML = game.currHP
//     }
    
//   }
  
// }

// function randomTime(min, max) {
//   return Math.round(Math.random() * (max - min) + min);
// }

// function randomHole(holes) {
//   const idx = Math.floor(Math.random() * holes.length);
//   const hole = holes[idx];
//   return hole;
// }

// function peep() {
//   const time = randomTime(400, 4000);
//   const hole = randomHole(holes);
//   hole.classList.add('up');
//   setTimeout(() => {
//     hole.classList.remove('up');
//     if (!timeUp) peep();
//   }, time);
// }

//start the game
//init everything at zero
//load level 1 game states
//  <bonus>list of types of monster available for the level
//  time range to be inserted to "random" monster stays up
//