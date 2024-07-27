



const numberInput = document.getElementById('number-input')
const convertBtn = document.getElementById('convert-btn')
const result = document.getElementById('result')

const countdown = (number) => {
    console.log(number)

    if (number === 0) {
        return
    } else {
        countdown(number - 1)
    }
}


const checkUserInput = () => {
    const numValue = parseInt(numberInput.value)
    if (!numberInput.value || isNaN(numValue) || numValue < 0) {
        alert("Please provide a decimal number greater than or equal to 0")
        return
    } 
    decimalToBinary(numValue)
    numberInput.value = "";
}

convertBtn.addEventListener('click', checkUserInput)

numberInput.addEventListener('keydown', (e) => {
    if (e.key == "Enter") {
        checkUserInput()
    }
})


const decimalToBinary = (input) => {
    let binary = "";
    if (input == 0) {
        binary = "0"
    }
    while (input > 0) {
        binary = (input % 2) + binary
        input = Math.floor(input / 2)
    }

    result.innerText = binary
}