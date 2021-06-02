class LevelsAdapter {
  constructor(){
    this.base = 'https://pummelapi.herokuapp.com/api/levels/'
  }

  getLevels(){
    return fetch(this.base).then(res => res.json())
  }

  getLevel(num){
    return fetch(this.base + num).then(res => res.json())
  }
}