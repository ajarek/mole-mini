const initiation = () => {
    startGame.removeEventListener('click', initiation)
    
    const square = [...document.querySelectorAll('.square')]
    const time = document.querySelector('.time')
    const score = document.querySelector('.score')
    let start = 60
    let point = 0

    const displayMole = () => {
        for (i = 0; i < square.length; i++) {
            if (square[i].classList.contains('active')) {
                square[i].classList.remove('active')
            }
        }
        squareRandom = square[Math.floor(Math.random() * square.length)]
        squareRandom.classList.add('active')
    }
    setInterval(displayMole, 700)

    const addPoint = (e) => {
        if (e.target.classList.contains('active')) {
            ++point
            score.innerHTML = point
        }
    }

    square.forEach(el => {
        el.addEventListener('click', addPoint)
    })

    const stoper = () => {
        start--
        time.innerHTML = start
        if (start == 0) {
            alert('game over , Your score: ' + point)
            location.reload()
        }
    }
    setInterval(stoper, 1000)
}

const startGame = document.querySelector('.start')
startGame.addEventListener('click', initiation)