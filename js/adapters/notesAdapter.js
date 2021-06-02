class NotesAdapter {
  constructor(){
    this.base = 'https://pummelapi.herokuapp.com/api/notes'
  }

  submitNote(comment, level){
    const newComment = {
      comment: comment, 
      level_id: level,
    };
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newComment)
    };
    return fetch(this.base, configObj); 
  }
}