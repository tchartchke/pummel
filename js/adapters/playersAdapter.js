class PlayersAdapter {
  constructor(){
    this.base = 'http://127.0.0.1:3000/api/players/'
  }

  getPlayers(){
    //TODO: fetch top 10 scores, not all players, sorted DESC by score
    return fetch(this.base).then(res => res.json())
  }


  saveGame(name, score, date){
    const newPlayer = {
      name: name, 
      score: score,
      play_date: date
    };
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newPlayer)
    };
    fetch(this.base, configObj); 
  }
}