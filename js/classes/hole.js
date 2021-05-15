class Hole{
  constructor(num, levelObject){
    this._name = `hole${num}`
    this._up = false
    this._level = levelObject

  }

  get name(){ return this._name }
  get up(){ return this._up }
  get level(){ return this._level}

  lift(){
    visualize.lift(this.name)
    return this._up = true
  }
  drop(){
    visualize.drop(this.name)
    return this._up = false
  }

  randomTime(){
    return Math.round(Math.random() * (this.level.speedMax - this.level.speedMin) + this.level.speedMin);
  }

  peep(){
    const hold = this.randomTime();
    if (!this.up){
      this.lift();
      setTimeout(() => {
        if (this.up){
          this.drop();
          this.level.game.updateCurrHP(-1) //TODO: health to be lost based on baddie in the hole
        }
      }, hold)
    }
  }

}