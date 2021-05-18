const visualize = (function() {
  return {
    showHP: function (num) {
      const hpbar = document.querySelector('.health')
      // hpbar.style.width = `${num}%`
    },

    highScoreBoard: function() {
      const highScores = document.getElementById('highscores')
      highScores.innerHTML = ""
      

    }
  }
})()