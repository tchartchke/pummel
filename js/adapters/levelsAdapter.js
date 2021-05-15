class LevelsAdapter {
  constructor(){
    this.base = 'http://127.0.0.1:3000/api/levels/'
  }

  getLevels(){
    return fetch(this.base).then(res => res.json())
  }

  getLevel(num){
    return fetch(this.base + num).then(res => res.json())
  }
}