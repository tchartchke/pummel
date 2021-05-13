class User {
  constructor(userName, score, date){
    this._name = userName
    this._score = score
    this._date = date
  };

  get name(){
    return this._name
  };

  get score(){
    return this._score
  };

  get date(){
    return this._date
  };

}