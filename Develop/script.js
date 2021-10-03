// Assignment code here
function getRandomPositionInArray(arrayLength) {
  var randomNumber=Math.random();
  var randomValue=randomNumber*arrayLength;
  return Math.floor(randomValue);
}

function generateRandomUpperCaseLetter(){
  var upperCaseLetters = ["A","B","C","D","E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T","U","V","W","X","Y","Z"]

  var randomPosition=getRandomPositionInArray(upperCaseLetters.length);
  return upperCaseLetters[randomPosition];

}

function generateRandomLowerCaseLetter(){
  var lowerCaseLetters = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

  var randomPosition=getRandomPositionInArray(lowerCaseLetters.length);
  return lowerCaseLetters[randomPosition];
}

function generateRandomNumber() {
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  var randomPosition=getRandomPositionInArray(numbers.length);
  return number[randomPosition];
}

function generateRandomSpecialCharacter() {
  var specialCharacters = ["!", "@", "#", "$","%","^","&","*","("];

  var randomPosition=getRandomPositionInArray(specialCharacters.length);
  return specialCharacters[randomPosition];

}

function generateRandomPassword(){
  var includeUppercaseLetters=true;
  var includeLowerCaseLetters=true;
  var includeNumbers=true;
  var includeSpecialCharacters=true;

  var password="";
  if(includeUppercaseLetters) {
    password+=generateRandomUpperCaseLetter();
  }
  if(includeLowerCaseLetters) {
    password+=generateRandomLowerCaseLetter();
  }
  if(includeNumbers) {
    password+=generateRandomNumber();
  }
  if(includeSpecialCharacters) {
    password+=generateRandomSpecialCharacter();
  }
  
  for(var i=password.length;i<passwordLength;i++){

  }
  return password;
}







// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {

  var length = parseInt(prompt("Length of Password"))
  if (length >= 8 && length <= 128) {
    
    var upper = confirm("Do you want Uppercase Letters?")
    var lower = confirm("Do you want Lowercase Letters?")
    var integers = confirm("Do you want to use Numbers?")
    var special = confirm("Do you want to use Special Characters?")
    if (upper || lower || integers || special) {
      var temp
      for (let i = 0; i <= length; i++) {
    temp += {

    }
      }
    }
  }
}
  function writePassword() {
    
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
