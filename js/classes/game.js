class Game {
  constructor() {
    this._score = 0
    this._startLvlScore = 0
    this._date = new Date()
    this._maxHP = 10
    this._currHP = 10
    this._levelNum = 1
    this._gameOver = false
    this.adapter = new LevelsAdapter()
  }

  // Getters
  get score(){ return this._score }
  get startLvlScore(){ return this._startLvlScore }
  get date(){ return this._date }
  get levelNum(){ return this._levelNum }
  get maxHP(){ return this._maxHP }
  get currHP(){ return this._currHP }
  get gameOver(){ return this._gameOver }
  get maxLevel(){ return this._maxLevel }
  get gameLevel(){ return this._gameLevel }

  set score(score){ return this._score = score }
  set currHP(currHP){ return this._currHP = currHP }


  // Functions
  updateScore(amount){
    const newScore = this.score + amount
    if (newScore >= this.gameLevel.passingScore){
      this.score = this.gameLevel.passingScore
    } else {
      this.score = newScore
    }
    visualize.showLevelProgress(this.levelProgress())
    return this.score
  }

  healthPercentage(){
    return Number.parseFloat((this.currHP / this.maxHP) * 100).toFixed(2)
  }

  levelProgress(){
    return Number.parseFloat(((this.score - this.startLvlScore) / (this.gameLevel.passingScore - this.startLvlScore)) * 100).toFixed(2)
  }

  // TODO: useful for heart containers
  // updateMaxHP(amount){
  //   return this._maxHP += amount
  // }

  updateCurrHP(amount){
    const newHP = this.currHP + amount
    if (newHP >= this.maxHP){
      this._currHP = this.maxHP
    } else if (newHP <= 0 ){
      this._currHP = 0
    } else {
      this._currHP = newHP
    }
    visualize.showHP(this.healthPercentage())
    return this.currHP
  }

  fetchLevel(){
    this.adapter.getLevel(this.levelNum).then(level => {
      this._gameLevel = new Level(level["level"], level["passingScore"], level["speedMin"], level["speedMax"], level["concurrency"], this)
      return this.gameLevel.play()
    }).catch(() =>  {
      //max level. you've won the game!
      return this.endGame()
    })
    // return this._gameLevel = new Level(this.levelNum, this._startLvlScore+10 + this.levelNum , 1000, 2000, 1, this)
  }
  
  nextLevel(){
    this._startLvlScore = this.gameLevel.passingScore
    this._levelNum += 1
    visualize.showLevel(this.levelNum)
    this.fetchLevel()
    // this.gameLevel.play();
  }

  start(){
    this.fetchLevel()
    visualize.showLevel(this.levelNum)
    // this.gameLevel.play();
    
  }

  endGame(){
    //create popup to enter username
    // let newName = document.getElementById('name-entry').value
    // const player = new User(newName, this.score, this.date)
    console.log("the game has ended!")
    const modal = document.getElementById('gameEndModal');
    const span = document.getElementsByClassName('close')[0];
    modal.style.display = "block";
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    //save player to database
    //list previous players sorted by highscore
    //restart button at bottom
  }

}