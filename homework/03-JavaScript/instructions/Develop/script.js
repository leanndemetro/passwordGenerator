// variable arrays 
var upCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@", "[", "/", "]", "^", "_", "`", "{", "|", "}", "~"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];



// Assignment Code-connects variable to button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// creates a function that's return is what shows up in the password text box on the page- so logic should go here
function generatePassword() {

var allCharacters = [];
var password = [];

  // this will appear as a prompt box when generate password button is clicked
  var charCount = prompt("Choose a password length from 8-128 characters");

  if (isNaN(charCount)) {

    return "The value you entered is not accepted";
  }

  if (charCount < 8 || charCount > 128) {

    alert("Please enter a password length from 8-128 characters.");

    return "try again";
  }


  var upperCase = confirm("Include uppercase characters?");

  if (upperCase) {
    for (var i = 0; i < upCase.length; i++) {
      allCharacters.push(upCase[i]);
    }
  }


  var lowerCase = confirm("Include lowercase characters?");

  if (lowerCase) {
    for (var j = 0; j < lowCase.length; j++) {
      allCharacters.push(lowCase[j]);
    }
  }


  var specialChar = confirm("Include special characters?");

  if (specialChar) {
    for (var k = 0; k < specChar.length; k++) {
      allCharacters.push(specChar[k]);
    }
  }

  var numbers = confirm("Include numbers?");

  if (numbers) {
    for (var m = 0; m < num.length; m++) {
      allCharacters.push(num[m]);
    }

  }

  for (var f = 0; f < charCount; f++) {
    password.push(allCharacters[Math.floor(Math.random() * allCharacters.length)]);
     }

     var final = password.join("");
     return final;
  }














