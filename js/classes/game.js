class Game {
  constructor() {
    this._score = 0
    this._LvlScore = 0
    this._date = new Date().toLocaleDateString('fr-CA')
    this._maxHP = 10
    this._currHP = 10
    this._levelNum = 1
    this._gameOver = false
    this.adapter = new LevelsAdapter()

    this.hpbar = document.querySelector('.health')
  }

  get score(){ return this._score }
  get LvlScore(){ return this._LvlScore }
  get date(){ return this._date }
  get levelNum(){ return this._levelNum }
  get maxHP(){ return this._maxHP }
  get currHP(){ return this._currHP }
  get gameOver(){ return this._gameOver }
  get maxLevel(){ return this._maxLevel }
  get gameLevel(){ return this._gameLevel }

  set score(score){ return this._score = score }
  set currHP(currHP){ return this._currHP = currHP }

  updateScore(amount){
    const newScore = this.score + amount
    if (newScore >= this.gameLevel.passingScore){
      this.score = this.gameLevel.passingScore
    } else {
      this.score = newScore
    }
    return this.score
  }

  healthPercentage(){
    return Number.parseFloat((this.currHP / this.maxHP) * 100).toFixed(2)
  }

  updateCurrHP(amount){
    const newHP = this.currHP + amount
    if (newHP >= this.maxHP){
      this._currHP = this.maxHP
    } else if (newHP <= 0 ){
      this._currHP = 0
    } else {
      this._currHP = newHP
    }
    this.hpbar.style.width = `${this.healthPercentage()}%`
    return this.currHP
  }

  fetchLevel(){
    this.adapter.getLevel(this.levelNum).then(level => {
      this._gameLevel = new Level(level["level"], level["passingScore"], level["speedMin"], level["speedMax"], level["wait"], this)
      return this.gameLevel.play()
    }).catch(() =>  {
      return this.endGame("Congrats! You've reached the end!")
    })
     
  }
  
  nextLevel(){
    this._levelNum += 1
    this.fetchLevel()
  }

  start(){
    this.fetchLevel()
  }

  endGame(msg="Game Over"){
    console.log("the game has ended!")
    const endMsg = document.querySelector('.end-msg')
    endMsg.innerHTML = msg
    const modal = document.getElementById('gameEndModal');
    const span = document.getElementsByClassName('close')[0];
    modal.style.display = "block";
    span.onclick = function() {
      modal.style.display = "none";
    }
    return msg
  }

}