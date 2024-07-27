



const numberInput = document.getElementById('number-input')
const convertBtn = document.getElementById('convert-btn')
const result = document.getElementById('result')



const decimalToBinary = (input) => {
    if (input === 0) {
        return "0";
    }  else if (input === 1) {
        return "1";
    }   else {
        return decimalToBinary(Math.floor(input / 2)) + (input % 2)
    }



    // let binary = "";
    // while (input > 0) {
    //     binary = (input % 2) + binary;
    //     input = Math.floor(input / 2);
    // }
    // return binary; // Handle the case where input is 0



}




const checkUserInput = () => {
    const numValue = parseInt(numberInput.value)
    if (!numberInput.value || isNaN(numValue) || numValue < 0) {
        alert("Please provide a decimal number greater than or equal to 0")
        return
    } 
    decimalToBinary(numValue)
    result.textContent = decimalToBinary()
    numberInput.value = "";
}

convertBtn.addEventListener('click', checkUserInput)

numberInput.addEventListener('keydown', (e) => {
    if (e.key == "Enter") {
        checkUserInput()
    }
})

