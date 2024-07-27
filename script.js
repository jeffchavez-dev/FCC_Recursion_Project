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
    // const inputs = [];
    // const quotients = [];
    // const remainders = [];
    
    // if (input === 0) {
    //     result.innerText = "0"
    //     return
    // }

    // while (input > 0) {
    //     const quotient = Math.floor(input / 2);
    //     const remainder = input % 2
    //     input = quotient;
    //     inputs.push(input);
    //     quotients.push(quotient);
    //     remainders.push(remainder);
    // }

    // console.log("Inputs: ", inputs)
    // console.log("Quotients: ", quotients)
    // console.log("Remainders: ", remainders)


    // result.innerText = remainders.reverse().join('')

    let binary = "";

    while (input > 0) {
        input = Math.floor(input / 2)
    }

    result.innerText = binary
}