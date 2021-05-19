class NotesAdapter {
  constructor(){
    this.base = 'http://127.0.0.1:3000/api/notes'
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
    fetch(this.base, configObj); 
  }
}