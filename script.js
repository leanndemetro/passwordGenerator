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

// this is the array of all characters combined
var allCharacters = [];

// this is the final array that will be returned as the password
var password = [];

  // this will appear as a prompt box when generate password button is clicked
  var charCount = prompt("Choose a password length from 8-128 characters");

  // checks that the user has entered a numerical value, and if not, returns the listed string.
  if (isNaN(charCount)) {

    return "The value you entered is not accepted";
  }

  // ensures the user's charCount choice is within the accepted range, and if not, returns the listed string.
  if (charCount < 8 || charCount > 128) {

    alert("Please enter a password length from 8-128 characters.");

    return "try again";
  }

 //if "cancel" is selected by user, tells browser not to include uppercase characters.
  var upperCase = confirm("Include uppercase characters?");

  // if user selects "okay" the browser runs a for loop that scans the entire "upCase" array, and pushes it's contents into a new array called "allCharacters"
  if (upperCase) {
    for (var i = 0; i < upCase.length; i++) {
      allCharacters.push(upCase[i]);
    }
  }

  //if "cancel" is selected by user, tells browser not to include lowercase characters.
  var lowerCase = confirm("Include lowercase characters?");

  // if user selects "okay" the browser runs a for loop that scans the entire "lowCase" array, and pushes it's contents into a new array called "allCharacters"
  if (lowerCase) {
    for (var j = 0; j < lowCase.length; j++) {
      allCharacters.push(lowCase[j]);
    }
  }

  //if "cancel" is selected by user, tells browser not to include special characters.
  var specialChar = confirm("Include special characters?");

  // if user selects "okay" the browser runs a for loop that scans the entire "specChar" array, and pushes it's contents into a new array called "allCharacters"
  if (specialChar) {
    for (var k = 0; k < specChar.length; k++) {
      allCharacters.push(specChar[k]);
    }
  }

   //if "cancel" is selected by user, tells browser not to include numerical characters.
  var numbers = confirm("Include numbers?");

   // if user selects "okay" the browser runs a for loop that scans the entire "num" array, and pushes it's contents into a new array called "allCharacters"
  if (numbers) {
    for (var m = 0; m < num.length; m++) {
      allCharacters.push(num[m]);
    }

  }
 // creates a for loop that ensures the return's length is the amount of characters chosen in the charCount function.
  for (var f = 0; f < charCount; f++) {

// pushes random selections from the allCharacters array into a new array called password
    password.push(allCharacters[Math.floor(Math.random() * allCharacters.length)]);
     }

// var final is the final returned password, it ensures the return is in string format and has no spaces or characters between each returned character.
     var final = password.join("");
     return final;
  }














