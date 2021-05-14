const visualize = (function() {
  return {
    lift: function (holeName) {
      const hole = document.querySelector(`.${holeName}`)
      hole.classList.add('up')
    },

    drop: function (holeName) {
      const hole = document.querySelector(`.${holeName}`)
      hole.classList.remove('up')
    },

    showHP: function (num) {
      const hpbar = document.querySelector('.health')
      hpbar.style.width = `${num}%`
    },

    showLevelProgress: function (num) {
      const progbar = document.querySelector('.levelprogress')
      progbar.style.width = `${num}%`
    }
  }
})()