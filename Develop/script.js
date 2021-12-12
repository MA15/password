var upperCaseLetters = ["A","B","C","D","E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T","U","V","W","X","Y","Z"]
var lowerCaseLetters = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!", "@", "#", "$","%","^","&","*","("];

// Assignment code here
function getRandomPositionInArray(arrayLength) {
  debugger
  var randomNumber=Math.random();
  var randomValue=randomNumber*arrayLength;
  return Math.floor(randomValue);
}

function generateRandom(arr){
debugger

  var randomPosition=getRandomPositionInArray(arr.length);
  return arr[randomPosition];

}






function generateRandomPassword(length, upper, lower, integers, special){
  debugger
  
  var allPossible = []

    if(upper) {
    allPossible = [...allPossible,...upperCaseLetters] 
    }
    if(lower) {
     allPossible = [...allPossible,...lowerCaseLetters]
    }
    if(integers) {
      allPossible = [...allPossible,...numbers]
    }
    if(special) {
      allPossible = [...allPossible,...specialCharacters]
    }


  var password= "";
  for(var i=0;i<length;i++){
    password = password+generateRandom(allPossible);
  
  }

  
  
  return password.substring(0, length);
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// for(var i=password.length;i<passwordLength;i++){

// }



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  debugger

  var length = parseInt(prompt("Length of Password"));
  console.log(length);

  if (length >= 8 && length <= 128) {
    
    var upper = confirm("Do you want Uppercase Letters?")
    var lower = confirm("Do you want Lowercase Letters?")
    var integers = confirm("Do you want to use Numbers?")
    var special = confirm("Do you want to use Special Characters?")
    if (upper || lower || integers || special) {
      var finalPassword = generateRandomPassword(length, upper, lower, integers, special);
    
      return finalPassword;

    }
  }
}

function writePassword() {
  debugger
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
