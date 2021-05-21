class Level{
  constructor(lvl, passingScore, speedMin, speedMax, wait, game){
    this._lvl = lvl
    this._passingScore = passingScore
    this._speedMin = speedMin
    this._speedMax = speedMax
    this._wait = wait
    this._game = game
    this.active = true
    this.playlvl;

    this._points = 0

    this.levelIndicator = document.querySelector('.lvlindicator')
    this.levelIndicator.innerHTML = `Level ${lvl}`
    this.levelProgressBar = document.querySelector('.levelprogress')
    this.levelProgressBar.style.width = `0%`

    this.blink(this.levelIndicator)

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
  get wait(){ return this._wait }
  get points(){ return this._points }
  get passingScore(){ return this._passingScore }
  get speedMin(){ return this._speedMin }
  get speedMax(){ return this._speedMax }
  get game(){ return this._game }
  get holes(){ return this._holes }
  get running(){ return this._running }

  set points(amt){
    return this._points = amt
  }

  levelProgress(){
    return Number.parseFloat( this.points / this.passingScore * 100).toFixed(2)
  }

  isLevelOver(){
    return this.points >= this.passingScore || this.game.currHP === 0
  }

  play(){
      this.playLvl = setInterval(() => {
        if (this.isLevelOver()){
          this.active = false
          this.resetHoles
          clearInterval(this.playLvl)
          if (this.game.score >= this.passingScore){
            return this.game.nextLevel()
          } else if ( this.game.currHP === 0 ){
            return this.game.endGame()
          }
        }
        this.peepHole();
      }, Math.round(Math.random() * (this.wait*1.5 - this.wait) + this.wait)); 
  }

  blink(node){
    node.classList.add('hightlight')
    setTimeout(() => {
      node.classList.remove('hightlight')
    }, 500);
  }

  addPoints(amt){
    this.points += amt
    this.game.updateScore(amt)
    this.levelProgressBar.style.width = `${this.levelProgress()}%`
    return this.points
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
  }

}