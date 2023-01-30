// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//My code.

function passGen() {
  let passLength = prompt("Specify your password length. Note - please select a number between 8 and 128", 20);

  // Validate input password length
  while (isNaN(passLength) || passLength < 8 || passLength > 128) {
    alert("Please select a number between 8 and 128!");
    passLength = prompt("Specify your password length. Note - please select a number between 8 and 128", 20);
  }

  let uprCase = confirm("Would you like your password to include UPPERCASE letters? Click the OK box for yes, or the Cancel button for no.");
  let lwrCase = confirm("Would you like your password to include lowercase letters? Click the OK box for yes, or the Cancel button for no.");
  let incldNm = confirm("Would you like your password to include numbers? Click the OK box for yes, or the Cancel button for no.");
  let incldSym = confirm("Would you like your password to include symbols? Click the OK box for yes, or the Cancel button for no.");

  // Validate user selection
  if (!uprCase && !lwrCase && !incldNm && !incldSym) {
    return alert("Please try again. You must select at least one character type.");
  }

  const randomFunc = {
    uprCase: genRandUpp,
    lwrCase: genRandLow,
    incldNm: genRandNum,
    incldSym: genRandSym
  };

  // Functions to generate random letters, numbers, and symbols.
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

  let generatedPassword = "";
  let typesCount = 0;
  let passSetArray = [];

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

  for (let i = 0; i < passLength; i += typesCount) {
    passSetArray.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  console.log(generatedPassword);

  finalPassword = generatedPassword.slice(0,length);
}

passGen();
