    // HOME_WORK 1 (PART 1)
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp =/^[a-zA-Z0-9._%+-]+@gmail\.com$/
gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'ok'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'Not ok'
        gmailResult.style.color = 'red'
    }
}

// HOME_WORK 1 (PART 2)

// const animatedBlock = document.querySelector('.child_block')

// let position = 0

// function moveBlock () {
//     if (position <= 450) {
//         animatedBlock.style.left = `${position}px`
//         position ++
//         requestAnimationFrame(moveBlock)
//     }
// }
// moveBlock()




// HOME_WORK 2.1

const animatedBlock = document.querySelector('.child_block')

let currentPosition = 0
let currentPosition_2 = 0

const maxWidthParentBlock = 450
const minWidthParentBlock = 0

function moveBlock() {

    if (currentPosition <= maxWidthParentBlock && currentPosition_2 === 0) {
        currentPosition++
    }

    else if (currentPosition >= maxWidthParentBlock && currentPosition_2 <= maxWidthParentBlock) {
        currentPosition_2++
    }

    else if (currentPosition >= minWidthParentBlock && currentPosition_2 >= maxWidthParentBlock) {
        currentPosition--
    }

    else if (currentPosition <= minWidthParentBlock && currentPosition_2 >= minWidthParentBlock) {
        currentPosition_2--
    }

    animatedBlock.style.left = `${currentPosition}px`
    animatedBlock.style.top = `${currentPosition_2}px`

    requestAnimationFrame(moveBlock)
}
moveBlock()


// HOME_WORK 2.2

const seconds = document.querySelector('#seconds')

const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const resetBtn = document.querySelector('#reset')

let count = 0
let interval = null

startBtn.onclick = () => {

    if (interval !== null) return

    interval = setInterval(() => {
        count++
        seconds.innerHTML = count
    }, 1000)
}

stopBtn.onclick = () => {
    clearInterval(interval)
    interval = null
}

resetBtn.onclick = () => {
    clearInterval(interval)
    interval = null

    count = 0
    seconds.innerHTML = count
}