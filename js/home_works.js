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

const animatedBlock = document.querySelector('.child_block')

let position = 0

function moveBlock () {
    if (position <= 450) {
        animatedBlock.style.left = `${position}px`
        position ++
        requestAnimationFrame(moveBlock)
    }
}
moveBlock()