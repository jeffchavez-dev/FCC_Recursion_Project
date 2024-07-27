



const numberInput = document.getElementById('number-input')
const convertBtn = document.getElementById('convert-btn')
const result = document.getElementById('result')

const countDownAndUp = (number) => {
    console.log(number)

    if (number === 0) {
        console.log("Reached base case")
        return
    } else {
        countDownAndUp(number - 1)
        console.log(number)
    }
}


countDownAndUp(20)

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
    if (input === 0) {
        return "";
    } else {
        return decimalToBinary(Math.floor(input / 2))
    }
}