class Level{
  constructor(lvl, passingScore, speedMin, speedMax, concurrency, game){
    this._lvl = lvl
    this._passingScore = passingScore
    this._speedMin = speedMin
    this._speedMax = speedMax
    this._concurrency = concurrency
    this._game = game
    // this._levelOver = false
    this.playlvl;

    this._holes = {
      hole1 : new Hole("1", this),
      hole2 : new Hole("2", this),
      hole3 : new Hole("3", this),
      hole4 : new Hole("4", this),
      hole5 : new Hole("5", this),
      hole6 : new Hole("6", this),
      hole7 : new Hole("7", this),
      hole8 : new Hole("8", this),
      hole9 : new Hole("9", this)
    }
  };

  get level(){ return this._lvl }
  get passingScore(){ return this._passingScore }
  get speedMin(){ return this._speedMin }
  get speedMax(){ return this._speedMax }
  get concurrency(){ return this._concurrency }
  get game(){ return this._game }
  get holes(){ return this._holes }
  get running(){ return this._running }
  // get levelOver(){ return this._levelOver }

  //Functions

  endLevel(){
    // this._levelOver = false
    clearInterval(this.playLvl)
    return [this.game.score, this.game.currHP]
  }
  play(){
    let endLevelState = []
    // run peepLoop <# concurrency > number of times
    console.log("beginning level")
    this.playLvl = setInterval(() => {
      this.peepHole();
      if (this.game.score >= this.passingScore){
        console.log("End of Level, you win!")
        
        if (endLevelState === []){
          endLevelState = this.endLevel()
        } else { this.endLevel()}
        this.resetHoles
        //TODO: mark level complete and move to next level
        //if next level available then play that level
        //else say congrats your the weeeeener and prompt saving
      } else if ( this.game.currHP === 0){
        console.log("HP is 0. You DED")

        if (endLevelState === []){
          endLevelState = this.endLevel()
        } else { this.endLevel()}
        this.resetHoles()
        //TODO: say nice try and prompt saving
      }
      console.log(`currHP in loop: ${this.game.currHP}`)
    }, this.speedMax); 
  }

  peepHole(){
    let hole = this.randomHole()
    if (hole.up){
      hole = this.randomHole()
    }
    hole.peep()
  }

  randomHole(){
    const keys = Object.keys(this.holes);
    return this.holes[keys[ keys.length * Math.random() << 0]];
  }

  resetHoles(){
    for (const holeName in this.holes) {
      this.holes[holeName].drop()
    }
    console.log("all holes dropped")
  }

}