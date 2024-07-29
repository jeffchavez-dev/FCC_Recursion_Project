



const numberInput = document.getElementById('number-input')
const convertBtn = document.getElementById('convert-btn')
const result = document.getElementById('result')



const decimalToBinary = (input) => {
    if (input === 0 || input === 1) {
        return String(input);
    }  else {
        return decimalToBinary(Math.floor(input / 2)) + (input % 2)
    }
}


const showAnimation = () => {

}

const checkUserInput = () => {
    const numValue = parseInt(numberInput.value)
    if (!numberInput.value || isNaN(numValue) || numValue < 0) {
        alert("Please provide a decimal number greater than or equal to 0")
        return
    } 
    decimalToBinary(numValue)

    if (numValue === 5) {
        showAnimation() 
        return
    }
    result.textContent = decimalToBinary()
    numberInput.value = "";
}

convertBtn.addEventListener('click', checkUserInput)

numberInput.addEventListener('keydown', (e) => {
    if (e.key == "Enter") {
        checkUserInput()
    }
})

