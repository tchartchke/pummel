class PlayersAdapter {
  constructor(){
    this.base = 'https://pummelapi.herokuapp.com/api/players'
  }

  getTopScores(){
    return fetch(`${this.base}/top10`).then(res => res.json())
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
    return fetch(this.base, configObj); 
  }
}