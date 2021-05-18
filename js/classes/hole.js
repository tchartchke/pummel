class Hole{
  constructor(num, levelObject){
    this._name = `hole${num}`
    this._up = false
    this._level = levelObject
    this.hole = document.querySelector(`.hole${num}`)
  }

  get name(){ return this._name }
  get up(){ return this._up }
  get level(){ return this._level}

  lift(){
    this.hole.classList.add('up')
    return this._up = true
  }
  drop(){
    this.hole.classList.remove('up')
    return this._up = false
  }

  randomTime(){
    return Math.round(Math.random() * (this.level.speedMax - this.level.speedMin) + this.level.speedMin);
  }

  peep(){
    if (!this.up){
      this.lift();
      setTimeout(() => {
        if (this.up){
          this.drop();
          this.level.game.updateCurrHP(-1) //TODO: health to be lost based on baddie in the hole
        }
      }, this.randomTime())
    }
  }

}