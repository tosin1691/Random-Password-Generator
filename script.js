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

//Function to validate users input
function isInValidInput (usersInput, minLength, maxLength){

  if (usersInput === null) {
    return true
  } 
  
  let usersInputAsNumber = Number(usersInput) 

  if ((usersInputAsNumber < minLength) || (usersInputAsNumber > maxLength)) {
    return true
  }

  if (maxLength !== undefined && usersInputAsNumber > maxLength) {
    return true
  }

  return false
  // (passwordLength === null) || (passwordLengthAsNumber < minPasswordLength) 
}




// Function to prompt user for password options. Inside the function I used a While loop and nested while loop to prompt users to enter preferred criteria for their password before it is generated. The loop breaks completely once criteria has been inputted as required
function getPasswordOptions() {

  while (continueRunning) {

    //The below uses a series of prompt method to prompt users to enter the length of password. Also utilised the use of if statements, which generates an alert if user's inputs is invalid. User will only be able progress at each loop once input becomes valid. 

    passwordLength = prompt("Input the length of your password (must be at least 8 characters but no more than 128).")
    
    passwordLengthAsNumber = Number(passwordLength)
    
    console.log(passwordLengthAsNumber)
    // if ((passwordLength === null) || (passwordLengthAsNumber < minPasswordLength) || (passwordLengthAsNumber > maxPasswordLength)) {
      // alert ("Incorrect input. Password length must be at least 8 characters but no more than 128")
     if (isInValidInput(passwordLength, minPasswordLength, maxPasswordLength) || isNaN(passwordLengthAsNumber)){
      alert ("Incorrect input. This field accepts numeric values only i.e. input 10 if you want the length of your password to be 10 character long")
    } else {
      while(passwordLengthAsNumber >= minPasswordLength || passwordLengthAsNumber <= maxPasswordLength) {
        
        characterTypeLowercase = prompt("Input the number of lowercase characters you want in your password (your password must contain at least one). Input numeric values only i.e. input 1 if you want 1 lowercase character included in your password")

        characterTypeLowercaseAsNumber = Number(characterTypeLowercase)

         if (isInValidInput(characterTypeLowercase, minCharacterTypeLength)) {
          alert ("Incorrect input. Your password must contain at least one lowercase character i.e. input 1 if you want 1 lowercase character included in your password")
        } else if (isNaN(characterTypeLowercaseAsNumber)) {
          alert ("Incorrect input. This field accepts numeric values only i.e. input 1 if you want 1 lowercase character included in your password")
        } else if (characterTypeLowercaseAsNumber > (passwordLengthAsNumber - minusAmount)) {
          alert ("Incorrect input. Your input cannot be greater than: " + (passwordLengthAsNumber - minusAmount))
        } else {
          while(characterTypeLowercaseAsNumber >= minCharacterTypeLength){

            characterTypeUppercase = prompt("Input the number of uppercase characters you want in your password (your password must contain at least one). Input numeric values only i.e. type 1 if you want 1 uppercase character included in your password")

            characterTypeUppercaseAsNumber = Number(characterTypeUppercase)

           if (isInValidInput(characterTypeUppercase, minCharacterTypeLength)) {
              alert ("Incorrect input. Your password must contain at least one uppercase character i.e. input 1 if you want 1 uppercase character included in your password")
            } else if (isNaN(characterTypeUppercaseAsNumber)) {
              alert ("Incorrect input. This field accepts numeric values only i.e. input 1 if you want 1 uppercase character included in your password")
            } else if(characterTypeUppercaseAsNumber > (passwordLengthAsNumber - (characterTypeLowercaseAsNumber + 2))) {
              alert ("Incorrect input. Your input cannot be greater than: " + (passwordLengthAsNumber - (characterTypeLowercaseAsNumber + 2)))
            } else {

              while(characterTypeUppercaseAsNumber >= minCharacterTypeLength) {
                
                characterTypeNumeric = prompt("Input the number of numeric characters you want in your password (your password must contain at least one). Input numeric values only i.e. input 1 if you want 1 numeric character included in your password")

                characterTypeNumericAsNumber = Number(characterTypeNumeric)

               if (isInValidInput(characterTypeNumeric, minCharacterTypeLength)) {
                  alert ("incorrect input. Your password must contain at least one numeric character i.e. input 1 if you want 1 numeric character included in your password")
                } else if (isNaN(characterTypeNumericAsNumber)) {
                  alert ("Incorrect input. This field accepts numeric values only i.e. input 1 if you want 1 numeric character included in your password")
                } else if (characterTypeNumericAsNumber > (passwordLengthAsNumber - (characterTypeLowercaseAsNumber + characterTypeUppercaseAsNumber + 1))){
                  alert ("Incorrect input. Your input cannot be greater than: " + (passwordLengthAsNumber - (characterTypeLowercaseAsNumber + characterTypeUppercaseAsNumber + 1)))
                } else {
                  
                  while (characterTypeNumericAsNumber >= minCharacterTypeLength) {

                    characterTypeSpecial = prompt("Choose the number of special characters you want in your password (your password must contain at least one). Input numeric values only i.e. type 1 if you want 1 special character included in your password. Examples of special charaters include: !#$%&'()*+,-./:;<=>?@[\]^_`{|}~")
                    
                    characterTypeSpecialAsNumber = Number(characterTypeSpecial)
                    
                  if (isInValidInput(characterTypeSpecial, minCharacterTypeLength)) {
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

// the below calls the getPasswordOptions function displayed above
getPasswordOptions()

// new variable to identify the password character length remaining once options has been validated via the prompt. 
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

let passwordLengthInputted = document.querySelector('#password-length')
let lowercaseInputted = document.querySelector('#char-lowercase')
let uppercaseInputted = document.querySelector('#char-uppercase')
let numericInputted = document.querySelector('#char-numeric')
let specialInputted = document.querySelector('#char-special')




// Write password to the #password input
function writePassword() {

  //the below calling the generatePassword, passing in inputs by users and relevant characters array as argument. It also adds all this together to make a single string.  
  let password = generatePassword(characterTypeSpecialAsNumber, specialCharacters) + generatePassword(characterTypeNumericAsNumber, numericCharacters) + generatePassword(characterTypeLowercaseAsNumber, lowerCasedCharacters) + generatePassword(characterTypeUppercaseAsNumber, upperCasedCharacters) + generatePassword(characterTypeRandom, allCharacters)

  // the below splits the individual characters generated in the password variable into an array which each character as its own element.
  let splitPassword = password.split('')

  // this below sorts the splitPassword at random
  let sortPassword = splitPassword.sort(function(a, b){
    return 0.5 - Math.random()
  })

  // the below joins the sorted array from the sortPassword variable to a string
  let finalPassword = sortPassword.join('')

  let passwordText = document.querySelector('#password')

    //the below displays the password in the brower
    passwordText.value = finalPassword

    passwordLengthInputted.textContent = passwordLength
    lowercaseInputted.textContent = characterTypeLowercase
    uppercaseInputted.textContent = characterTypeUppercase
    numericInputted.textContent = characterTypeNumeric
    specialInputted.textContent = characterTypeSpecial
}

writePassword()

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

