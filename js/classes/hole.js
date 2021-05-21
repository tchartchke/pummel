class Hole{
  constructor(num, levelObject){
    this._name = `hole${num}`
    this._up = false
    this._level = levelObject
    this.hole = document.querySelector(`.hole${num}`)
    this.baddie = document.querySelector(`.hole${num} .baddie`)
  }

  get name(){ return this._name }
  get up(){ return this._up }
  get level(){ return this._level}

  lift(){
    this.hole.classList.add('up')
    this.baddie.style.background = `no-repeat center/contain url("icons/monster${this.randomBaddie()}.svg")`
    return this._up = true
  }
  drop(){
    this.hole.classList.remove('up')
    return this._up = false
  }

  randomTime(){
    return Math.round(Math.random() * (this.level.speedMax - this.level.speedMin) + this.level.speedMin);
  }

  randomBaddie(){
    const min = Math.ceil(1);
    const max = Math.floor(4);
    return Math.floor(Math.random() * (max - min + 1)) + min;
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