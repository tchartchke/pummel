class Level{
  constructor(lvl, passingScore, speedMin, speedMax, concurrency, game){
    this._lvl = lvl
    this._passingScore = passingScore
    this._speedMin = speedMin
    this._speedMax = speedMax
    this._concurrency = concurrency
    this._game = game
    this._running = false

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

  //Functions

  endLevel(){ 
    return this._running = false
  }

  play(){
    // run peepLoop <# concurrency > number of times
    console.log("beginning level")
    const playLvl = setInterval(() => {
      this.peepHole();
      if (this.game.score >= this.passingScore){
        console.log("passing")
        clearInterval(playLvl)
      } else if ( this.game.currHP === 0){
        clearInterval(playLvl)
        console.log("dead")
      }
    }, 10000);
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


}