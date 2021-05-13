class Game {
  constructor() {
    this._score = 0
    this._date = new Date()
    this._maxHP = 10
    this._currHP = 10
    this._levelNum = 1
    this._gameOver = false
    this._maxLevel = 1 //TODO: will change based off levels created. Should be set based off API call

  }

  // Getters
  get score(){ return this._score }
  get date(){ return this._date }
  get levelNum(){ return this._level }
  get maxHP(){ return this._maxHP }
  get currHP(){ return this._currHP }
  get gameOver(){ return this._gameOver }
  get maxLevel(){ return this._maxLevel }
  get gameLevel(){ return this._gameLevel }

  // Functions
  updateScore(amount){
    return this._score += amount
  }

  updateMaxHP(amount){
    return this._maxHP += amount
  }

  updateCurrHP(amount){
    const newHP = this.currHP + amount
    if (newHP >= this.maxHP){
      return this._currHP = this.maxHP
    } else if (newHP <= 0 ){
      return this._currHP = 0
    }
    return this._currHP = newHP
  }

  fetchLevel(){
    //fetches/sets/returns levelObject using the current levelNum
    return this._gameLevel = new Level(1, 20, 10000, 15000, 1, this)
  }
  start(){
    this.fetchLevel();
    this.gameLevel.play();


    //init level based off this.level => fetch/:port/level/levelNum (lvl, passingScore, speedMin, speedMax, concurrency - eventually a list of types of baddies available)
    //const lvlFeatures = fetchLevel(this.levelNum)
    //set speed and baddies for holes
    //run all holes until end conditions met



  }

  isGameOver(){
    //lose condition || win condition
    return this.currHP === 0 || this.level > this.maxLevel
  }

  endGame(){
    //create popup to enter username
    let newName = document.getElementById('name-entry').value
    const player = new User(newName, this.score, this.date)
    //save player to database
    //list previous players sorted by highscore
    //restart button at bottom
  }

}