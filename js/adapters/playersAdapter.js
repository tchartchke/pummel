class PlayersAdapter {
  constructor(){
    this.base = 'http://127.0.0.1:3000/api/players/'
  }

  getPlayers(){
    //TODO: fetch top 10 scores, not all players, sorted DESC by score
    return fetch(this.base).then(res => res.json())
  }

}