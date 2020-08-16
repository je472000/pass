// Assignment code here // Get references to the #generate element
var generateBtn = document.querySelector("#generate"); // Write password to the#password input
/*this is where i stored the array of numbers,characters,and letters*/
function writePassword() {
  var specialChars = ["!", "$", "%", "@", "^", "&","*","{","}",")"]
  var upperCaseChars = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var lowerCaseChars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
/*this is where I store the values of what should be executed*/
  var person = prompt("Please enter your name", "Harry Potter");
  var aNumber = Number(window.prompt("Type a number", ""));

  if (aNumber < 8 || aNumber > 128)
    aNumber = Number(
      window.prompt("Error!  Type a number between 8 and 128", ""),
    );

  var upperCase = window.confirm(
    "Would you like to include Uppercase characters?",
  );
  var lowerCase = window.confirm(
    "Would you like to include Lowercase characters?",
  );
  var numeric = window.confirm("Would you like to include numeric characters?");
  var specialCharacters = window.confirm(
    "Would you like to include special characters?",
  );
/*this is the fail function*/
  var cannotProceed =
    !upperCase && !lowerCase && !numeric && !specialCharacters;

  if (!upperCase && !lowerCase && !numeric && !specialCharacters) {
    alert(
      "Well..... I do not think I will be able to generate a password for you with no charcters!, Please try again",
    );
  }
/*this is where I compute and push what is selected*/
  function generatePassword(
    upperCase,
    lowerCase,
    numeric,
    specialCharacters,
    amountOfCharacters,
  ) {
    var password = [];
    var newCharacterArray = [];

    if (upperCase) {
      newCharacterArray.push(...upperCaseChars);
    }

    if (lowerCase) {
      newCharacterArray.push(...lowerCaseChars);
    }

    if (specialCharacters) {
      newCharacterArray.push(...specialChars);
    }

    if (numeric) {
      newCharacterArray.push(...nums);
    }
/*this is the function that generates the random part of the password*/
    for (var j = 0; j < amountOfCharacters; j++) {
      var myChar =
        newCharacterArray[Math.floor(Math.random() * newCharacterArray.length)];
      password.push(myChar);
    }

    return password.join("");
  }

  ///// Negative case
  if (!cannotProceed) {
    var password = generatePassword(
      upperCase,
      lowerCase,
      numeric,
      specialCharacters,
      aNumber,
    );
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  } else {
    return null;
  }
} // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);