function copyText(inputType) {
    var inputValue = document.getElementById(inputType).value;

    // Convert the input value based on the input type
    switch (inputType) {
        case 'decimal':
            document.getElementById('binary').value = decimalToBinary(inputValue);
            document.getElementById('hexadecimal').value = decimalToHexadecimal(inputValue);
            break;
        case 'binary':
            document.getElementById('decimal').value = binaryToDecimal(inputValue);
            document.getElementById('hexadecimal').value = binaryToHexadecimal(inputValue);
            break;
        case 'hexadecimal':
            document.getElementById('decimal').value = hexadecimalToDecimal(inputValue);
            document.getElementById('binary').value = hexadecimalToBinary(inputValue);
            break;
        default:
            break;
    }
}

function decimalToBinary(decimalValue) {
    return (parseInt(decimalValue, 10)).toString(2);
}

function decimalToHexadecimal(decimalValue) {
    return (parseInt(decimalValue, 10)).toString(16).toUpperCase();
}

function binaryToDecimal(binaryValue) {
    return parseInt(binaryValue, 2).toString(10);
}

function binaryToHexadecimal(binaryValue) {
    return parseInt(binaryValue, 2).toString(16).toUpperCase();
}

function hexadecimalToDecimal(hexadecimalValue) {
    return parseInt(hexadecimalValue, 16).toString(10);
}

function hexadecimalToBinary(hexadecimalValue) {
    return parseInt(hexadecimalValue, 16).toString(2);
}
