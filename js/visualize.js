const visualize = (function() {
  return {
    showHP: function (num) {
      const hpbar = document.querySelector('.health')
      hpbar.style.width = `${num}%`
    },

    showLevelProgress: function (num) {
      const progbar = document.querySelector('.levelprogress')
      progbar.style.width = `${num}%`
    },

    showLevel: function (num) {
      const lvl = document.querySelector('.lvlindicator')
      lvl.innerHTML = `Level ${num}`
    },

    highScoreBoard: function() {
      const highScores = document.getElementById('highscores')
      highScores.innerHTML = ""
      

    }
  }
})()