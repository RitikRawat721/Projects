//# password generator

function passwordGenerator(length, includesLowerCase, includesUpperCase, includesNumbers, includesSymbol) {

    const lowercaseChars = "abcdefghijklmnoprstuvwxyz";
    const uppercaseChars = lowercaseChars.toUpperCase();
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+";

    let allowerdChars = ""
    let password = ""

    allowerdChars += includesLowerCase ? lowercaseChars : "";
    allowerdChars += includesUpperCase ? uppercaseChars : "";
    allowerdChars += includesNumbers ? numbers : "";
    allowerdChars += includesSymbol ? symbols : "";

    if (length <= 0) {
        return "Length of the password must be at least 1";
    } else if (allowerdChars.length === 0) {
        return "At least 1 set of characters must be selected";
    }

    for (let i = 0; i < length; i++) {
        randomIndex  = Math.floor(Math.random() * allowerdChars.length);
        password += allowerdChars[randomIndex];
    }

    return password;
}


const passwordLength = 12;
const includesUpperCase = true;
const includesLowerCase = true;
const includesSymbol = true;
const includesNumbers = true;

const password = passwordGenerator( passwordLength, 
                                    includesLowerCase, 
                                    includesUpperCase, 
                                    includesNumbers, 
                                    includesSymbol)

    console.log('Generated Password: ' + password)