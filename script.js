// Assignment Code - Provided

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// My Code

// Creates a prompt asks the user to specify their desired password length and stores their response in a variable
function generatePassword() {
  let passLength = prompt("Specify your password length. Note - please select a number between 8 and 128", 20);

// Validates the input password length
  while (isNaN(passLength) || passLength < 8 || passLength > 128) {
    alert("Please select a number between 8 and 128!");
    passLength = prompt("Specify your password length. Note - please select a number between 8 and 128", 20);
  }

// A series of confirm windows to specify what characters the user wants to include in their password
  let uprCase = confirm("Would you like your password to include UPPERCASE letters? Click the OK box for yes, or the Cancel button for no.");
  let lwrCase = confirm("Would you like your password to include lowercase letters? Click the OK box for yes, or the Cancel button for no.");
  let incldNm = confirm("Would you like your password to include numbers? Click the OK box for yes, or the Cancel button for no.");
  let incldSym = confirm("Would you like your password to include symbols? Click the OK box for yes, or the Cancel button for no.");

// Validates user selection to make sure that they include at least one character type
  if (!uprCase && !lwrCase && !incldNm && !incldSym) {
    return alert("Please try again. You must select at least one character type.");
  }

// Creates an object that maps values from the functions below.
  const randomFunc = {
    uprCase: genRandUpp,
    lwrCase: genRandLow,
    incldNm: genRandNum,
    incldSym: genRandSym
  };

// Functions to generate random letters, numbers, and symbols. 
// They work by calculating a random number and referencing that to the
// specific ASCII decimal value associated with different sets of characters  
  function genRandLow() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  function genRandUpp() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  function genRandNum() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  function genRandSym() {
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
  }

  // Sets a starting point for the variables that will be used in the for loop below
  // by setting the 'generatedPassword' as an empty string, setting 'typesCount' to zero
  // and 'passSetArray as an empty array
  let generatedPassword = "";
  let typesCount = 0;
  let passSetArray = [];

 // Increases the types count variable if each type is selected
  if (uprCase) {
    passSetArray.push({ uprCase });
    typesCount++;
  }
  if (lwrCase) {
    passSetArray.push({ lwrCase });
    typesCount++;
  }
  if (incldNm) {
    passSetArray.push({ incldNm });
    typesCount++;
  }
  if (incldSym) {
    passSetArray.push({ incldSym });
    typesCount++;
  }

// Sets a for loop that calls the 'forEach' method on'passSetArray' and passes
// a callback function. The callback function accesses the object key of the current
// element set by four options above, and uses the key to call the corresponding
// function from the object. This result is then concatenated to the end of 'generatedPassword'
// until 'generatedPassword' = the 'passLength' specified by the user.
  for (let i = 0; i < passLength; i += typesCount) {
    passSetArray.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  //console.log(generatedPassword);

  // Since the loop above iterates based on the typecount, this could be problematic if the user selects all four 
  // character types but only wants, for example, 9 characters. To address this problem, the method below
  // only cuts a section of the fully generated string to pass on to be used elsewhere.
  var finalPassword = generatedPassword.slice(0, passLength);

 // Returns the finalPassword variable out of the function to be used by the starter code
  return finalPassword;
}
