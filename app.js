function copyText(sourceId) {
  // Get the value from the source text box
  const sourceValue = document.getElementById(sourceId).value;

  // Copy the value to the other two text boxes
  document.getElementById('decimal').value = toDecimal(sourceValue);
  document.getElementById('binary').value = toBinary(sourceValue);
  document.getElementById('hexadecimal').value = toHexadecimal(sourceValue);
}

function toBinary(input) {
  // Check if the input is empty
  if (input === "") {
    return "";
  }

  // Convert input to decimal if it's a hexadecimal string
  const decimalNumber = isNaN(input) ? parseInt(input, 16) : parseInt(input, 10);

  // Check if the input is a valid decimal number
  if (!Number.isInteger(decimalNumber) || decimalNumber < 0) {
    return "Invalid input.";
  }

  // Convert decimal to binary using toString method
  const binaryNumber = decimalNumber.toString(2);

  return binaryNumber;
}
  
function toHexadecimal(input) {
  // Check if the input is empty
  if (input === "") {
    return "";
  }

  // Convert input to decimal if it's a binary string
  const decimalNumber = isNaN(input) ? parseInt(input, 2) : parseInt(input, 10);

  // Check if the input is a valid decimal number
  if (!Number.isInteger(decimalNumber) || decimalNumber < 0) {
    return "Invalid input.";
  }

  // Convert decimal to hexadecimal using toString method
  const hexadecimalNumber = decimalNumber.toString(16).toUpperCase();

  return hexadecimalNumber;
}

function toDecimal(input) {
  // Check if the input is a binary string
  if (/^[01]+$/.test(input)) {
    return parseInt(input, 2);
  }

  // Check if the input is a hexadecimal string
  if (/^[0-9A-Fa-f]+$/.test(input)) {
    return parseInt(input, 16);
  }

  return "Invalid input.";
}