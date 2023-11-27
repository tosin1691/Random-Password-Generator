// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

const allCharacters = specialCharacters.concat(numericCharacters, lowerCasedCharacters, upperCasedCharacters)

let passwordLength
let characterTypeLowercase
let characterTypeUppercase
let characterTypeNumeric 
let characterTypeSpecial
let passwordLengthAsNumber
let characterTypeLowercaseAsNumber //y
let characterTypeUppercaseAsNumber
let characterTypeNumericAsNumber
let characterTypeSpecialAsNumber
let maxPasswordLength = 128
let minPasswordLength = 8
let minusAmount = 3
let minCharacterTypeLength = 1
let continueRunning = true


// Function to prompt user for password options
function getPasswordOptions() {
  while (continueRunning) {

    passwordLength = prompt("Input the length of your password (must be at least 8 characters but no more than 128).")
    
    passwordLengthAsNumber = parseInt(passwordLength)
    
    if ((passwordLength === null) || (passwordLengthAsNumber < minPasswordLength) || (passwordLengthAsNumber > maxPasswordLength)) {
      alert ("Incorrect input. Password length must be at least 8 characters but no more than 128")
    } else if (isNaN(passwordLengthAsNumber)){
      alert ("Incorrect input. This field accepts numeric values only i.e. input 10 if you want the length of your password to be 10 character long")
    } else {
      while(passwordLengthAsNumber >= minPasswordLength || passwordLengthAsNumber <= maxPasswordLength) {
        
        characterTypeLowercase = prompt("Input the number of lowercase characters you want in your password (your password must contain at least one). Input numeric values only i.e. input 1 if you want 1 lowercase character included in your password")

        characterTypeLowercaseAsNumber = parseInt(characterTypeLowercase)

         if (characterTypeLowercase === null || (characterTypeLowercaseAsNumber < minCharacterTypeLength)) {
          alert ("Incorrect input. Your password must contain at least one lowercase character i.e. input 1 if you want 1 lowercase character included in your password")
        } else if (isNaN(characterTypeLowercaseAsNumber)) {
          alert ("Incorrect input. This field accepts numeric values only i.e. input 1 if you want 1 lowercase character included in your password")
        } else if (characterTypeLowercaseAsNumber > (passwordLengthAsNumber - minusAmount)) {
          alert ("Incorrect input. Your input cannot be greater than: " + (passwordLengthAsNumber - minusAmount))
        } else {
          while(characterTypeLowercaseAsNumber >= minCharacterTypeLength){

            characterTypeUppercase = prompt("Input the number of uppercase characters you want in your password (your password must contain at least one). Input numeric values only i.e. type 1 if you want 1 uppercase character included in your password")

            characterTypeUppercaseAsNumber = parseInt(characterTypeUppercase)

           if ( characterTypeUppercase === null || (characterTypeUppercaseAsNumber < minCharacterTypeLength)) {
              alert ("Incorrect input. Your password must contain at least one uppercase character i.e. input 1 if you want 1 uppercase character included in your password")
            } else if (isNaN(characterTypeUppercaseAsNumber)) {
              alert ("Incorrect input. This field accepts numeric values only i.e. input 1 if you want 1 uppercase character included in your password")
            } else if(characterTypeUppercaseAsNumber > (passwordLengthAsNumber - (characterTypeLowercaseAsNumber + 2))) {
              alert ("Incorrect input. Your input cannot be greater than: " + (passwordLengthAsNumber - (characterTypeLowercaseAsNumber + 2)))
            } else {

              while(characterTypeUppercaseAsNumber >= minCharacterTypeLength) {
                
                characterTypeNumeric = prompt("Input the number of numeric characters you want in your password (your password must contain at least one). Input numeric values only i.e. input 1 if you want 1 numeric character included in your password")

                characterTypeNumericAsNumber = parseInt(characterTypeNumeric)

               if (characterTypeNumeric === null || (characterTypeNumericAsNumber < minCharacterTypeLength)) {
                  alert ("incorrect input. Your password must contain at least one numeric character i.e. input 1 if you want 1 numeric character included in your password")
                } else if (isNaN(characterTypeNumericAsNumber)) {
                  alert ("Incorrect input. This field accepts numeric values only i.e. input 1 if you want 1 numeric character included in your password")
                } else if (characterTypeNumericAsNumber > (passwordLengthAsNumber - (characterTypeLowercaseAsNumber + characterTypeUppercaseAsNumber + 1))){
                  alert ("Incorrect input. Your input cannot be greater than: " + (passwordLengthAsNumber - (characterTypeLowercaseAsNumber + characterTypeUppercaseAsNumber + 1)))
                } else {
                  
                  while (characterTypeNumericAsNumber >= minCharacterTypeLength) {

                    characterTypeSpecial = prompt("Choose the number of special characters you want in your password (your password must contain at least one). Input numeric values only i.e. type 1 if you want 1 special character included in your password")
                    
                    characterTypeSpecialAsNumber = parseInt(characterTypeSpecial)
                    
                  if (characterTypeSpecial === null || (characterTypeSpecialAsNumber < minCharacterTypeLength)) {
                      alert ("incorrect input. Your password must contain at least one special character i.e. input 1 if you want 1 special character included in your password")
                    } else if (isNaN(characterTypeSpecialAsNumber)) {
                      alert ("Incorrect input. This field accepts numeric values only i.e. input 1 if you want 1 special character included in your password")
                    } else if (characterTypeSpecialAsNumber > (passwordLengthAsNumber - (characterTypeLowercaseAsNumber + characterTypeUppercaseAsNumber + characterTypeNumericAsNumber))) {
                      alert ("Incorrect input. Your input cannot be greater than: " + (passwordLengthAsNumber - (characterTypeLowercaseAsNumber + characterTypeUppercaseAsNumber + characterTypeNumericAsNumber)))
                    } else {
                      break
                    }
                  }
                  break
                }
              }
              break
            }

          }
          break
        }
      }

      break
      
    }

    
  }

  

}

getPasswordOptions()


let characterTypeRandom = passwordLengthAsNumber - (characterTypeLowercaseAsNumber + characterTypeUppercaseAsNumber + characterTypeNumericAsNumber + characterTypeSpecialAsNumber)






// Function for getting a random element from an array
function getRandom(arr) {
  let randomCharacters = Math.floor(Math.random() * arr.length)
  return arr[randomCharacters]

}


// Function to generate password with user input
function generatePassword(characterLength, arr) {
  let randomPassword = ""

  for (i = 0; i < characterLength; i++) {
  
      randomPassword += getRandom(arr)
     
  }
return randomPassword
}




// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {

  let password = generatePassword(characterTypeSpecialAsNumber, specialCharacters) + generatePassword(characterTypeNumericAsNumber, numericCharacters) + generatePassword(characterTypeLowercaseAsNumber, lowerCasedCharacters) + generatePassword(characterTypeUppercaseAsNumber, upperCasedCharacters) + generatePassword(characterTypeRandom, allCharacters)

let sortPassword = password.split('')

sortPassword.sort(function(a, b){
  return 0.5 - Math.random()
})

let finalPassword = sortPassword.join('')



let passwordText = document.querySelector('#password')

  passwordText.value = finalPassword
}

writePassword()

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

