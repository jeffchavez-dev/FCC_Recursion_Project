

const callStack = [
    "a(): returns 'freeCodeCamp ' + b()",
    "b(): returns 'is ' + c()",
    "c(): returns 'awesome!'"
];

const a = () => {
    return "freeCodeCamp" + b()
}


const b = () => {
    return "is " + c()
}

const c = () => {
    return "awesome!"
}


console.log(a())

const numberInput = document.getElementById('number-input')
const convertBtn = document.getElementById('convert-btn')
const result = document.getElementById('result')

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