// variable arrays 
var upCase 
var lowCase 
var specChar 
var num 

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

  // this will appear as a prompt box when generate password button is clicked
  var charCount = prompt("Choose a password length from 8-128 characters");
  var upperCase = prompt("Include uppercase characters?");
  var lowerCase = prompt("Include lowercase characters?");
  var specialChar = prompt("Include special characters?");
  var numbers = prompt("Include numbers?");

  if (charCount.length > 8 || charCount.length < 128) 
  
   

  if (upperCase == "yes") {

  }

  if (lowerCase == "yes") {

  }

  if (specialChar == "yes") {

  }

  if (numbers == "yes") {

  }

}


