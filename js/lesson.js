const phoneInput = document.querySelector (`#phone_input`);
const phoneBtn = document.querySelector (`#phone_button`);
const phoneResult = document.querySelector (`#phone_result`);

const regex = /\+996 \d{3} \d{2}-\d{2}-\d{2}/;

phoneBtn.onclick = () => {
    if(regex.test(phoneInput.value)){
        phoneResult.style.color = `green`
        phoneResult.innerHTML = `Phone is valid`
    }else {
        phoneResult.style.color = `red`
        phoneResult.innerHTML = `Phone is invalid`
    }
}






// 5 урок

// const somInput = document.querySelector(`#som`)
// const usdInput = document.querySelector(`#usd`)

// somInput.addEventListener(`input`, () => {
//     const request = new XMLHttpRequest;  // создание запроса
//     request.open(`GET`, `../`)
//     request.setRequestHeader(`Content-Type`, `application/json`);
//     request.send()

//     request.onload = () => {
//         const data = JSON.parse(request.response)
//         usdInput.value = (data.usd*somInput.value).toFixed(2)
//     }
// })


const converter = (element, otherElement) => {
    element.addEventListener(`input`, () => {
    const request = new XMLHttpRequest;  // создание запроса
    request.open(`GET`, `../`)
    request.setRequestHeader(`Content-Type`, `application/json`);
    request.send()

    request.onload = () => {
        const data = JSON.parse(request.response)
        otherElement.value = (data.usd*element.value).toFixed(2)
    }
    })
}

converter(somInput, usdInput);
converter(usdInput, somInput);