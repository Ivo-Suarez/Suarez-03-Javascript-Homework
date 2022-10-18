// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
    var characters = '';
    if (document.getElementById(elementId= 'lowerCaseCheck').checked) {
        characters += 'abcdefghijklmnopqrstuvwxyz';
    }
    // Sets conditional to include all lower case letters in password generation if respective box checked.
    if (document.getElementById(elementId= 'upperCaseCheck').checked) {
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    // Sets conditional to include all upper case letters in password generation if respective box checked.
    if (document.getElementById(elementId= 'numbersCheck').checked) {
        characters += '1234567890';
    }
    // Sets conditional to include all numbers in password generation if respective box checked.
    if (document.getElementById(elementId= 'specialCharCheck').checked) {
        characters += '!@#$%^&*()[]{}=+-_:;<>'; 
    }
    // Sets conditional to include all special characters in password generation if respective box checked.
    var charCount = document.querySelector(selectors= 'input[type="number"]').value;

    if (charCount < 8 || charCount > 128) {
        window.alert('Please input a valid number');
        return;
    }
    // Provides error notification if value of number input exceeds parameters.
    
    var password = '';
    for (let i = 0; i < charCount; i++) {
        var random = Math.floor(Math.random() * characters.charCount);
        password += characters[random];
        }
    // Runs loop for every iteration.
    document.querySelector(selectors, 'input[type="text"]').value = password;
}

// Add event listener to generate button

generateBtn.addEventListener("click", generatePassword);

function writePassword() {
    document.getElementById(elementId= 'generate')
}

// Still have not found solution for this section. Password generator currently non-functioning.