// variable arrays 
var upCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specChar = ["!","#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".",":",";", "<", "=", ">", "?", "@","[","/","]", "^", "_", "`", "{", "|", "}", "~"];
var num = ["0","1","2","3","4","5","6","7","8","9"];
var minLength = ["8"];
var maxLength = ["128"];

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
  var charCount = prompt ("Choose a password length from 8-128 characters");
    
  if (charCount == minLength || charCount <= maxLength){
      alert("TEST");
    }

    else {
      alert("TEST");
    }
             
  var upperCase = confirm ("Include uppercase characters?");
   
  if (upperCase == "null" || upperCase == null || upperCase == "" ){
     alert("cancelled");
   }

   else {
     alert("WORKING");
   }

  var lowerCase = confirm ("Include lowercase characters?");

  if (upperCase == "null" || upperCase == null || upperCase == "" ){
    alert("cancelled");
  }

  else {
    alert("WORKING");
  }

  var specialChar = confirm ("Include special characters?");

  if (upperCase == "null" || upperCase == null || upperCase == "" ){
    alert("cancelled");
  }

  else {
    alert("WORKING");
  }

  var numbers = confirm ("Include numbers?");

  if (upperCase == "null" || upperCase == null || upperCase == "" ){
    alert("cancelled");
  }

  else {
    alert("WORKING");
  }


   

}




  



  
 



