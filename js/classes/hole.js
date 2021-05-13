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
    return this._up = true
  }
  drop(){
    return this._up = false
  }

  randomTime(){
    return Math.round(Math.random() * (this.level.speedMax - this.level.speedMin) + this.level.speedMin);
  }

  peep(){
    const wait = Math.round(Math.random() * (3000 - 1000) + 1000); 
    const hold = this.randomTime();
    setTimeout(()=>{
      this.lift();
      console.log(`${this.name} is up. hit it now (up: ${this.up})`)
    }, wait)
    if (this.up){
      setTimeout(() => {
        this.drop();
        console.log(`${this.name} is down. you missed it (up: ${this.up})`)
        this.level.game.updateCurrHP(-1) //TODO: health to be lost based on baddie in the hole
      }, hold)
    }
  }

}