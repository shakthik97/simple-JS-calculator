let display = document.getElementById('display');
function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    let input = display.value;
    if (input === "") {
        return;
    }

    let tokenArr = input.match(/(\d+\.?\d*|\+|\-|\*|\/)/g);
    let result = parseFloat(tokenArr[0]);
    let operator = null;

    for (let i = 1; i < tokenArr.length; i++) {
        let token = tokenArr[i];

        if (token === '+' || token === '-' || token === '*' || token === '/') {
            operator = token;
        }
        else {
            let number = parseFloat(token);

            switch (operator) {
                case '+':
                    result += number;
                    break;

                case '-':
                    result -= number;
                    break;

                case '*':
                    result *= number;
                    break;

                case '/':
                    if (number === 0) {
                        result = 'Error : division by 0 is not allowed';
                    }
                    else {
                        result /= number;
                    }
                    break;

                default:
                    break;

            }
        }
    }
    console.log(result);
    display.value = result;
}