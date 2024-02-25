function displayInput() {
    // Get the value from the input field
    const userInput = document.getElementById('decimal').value;
  
    // Display the input value on the screen
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = `You entered: ${userInput}`;
  }
  