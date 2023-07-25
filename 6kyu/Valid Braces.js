function validBraces(braces) {
    console.log('braces: ', braces);
    if(braces.length === 0) return true;
    const closingChar = getClosingChar(braces[0]);
    if(!closingChar) return false;
    const closingCharIndex = braces.lastIndexOf(closingChar);
    if(closingCharIndex === -1) return false;
    
    const subStringIsValid = validateSubString(braces.slice(1, closingCharIndex));
    
    if(!subStringIsValid) return false;
    return validBraces(braces.slice(closingCharIndex + 1));
}

function validateSubString(subStr) {
    console.log('substring: ', subStr);
    if(subStr.length === 0) return true;
    const closingChar = getClosingChar(subStr[0]);
    if(!closingChar) return false;
    const closingCharIndex = subStr.lastIndexOf(closingChar);
    if(closingCharIndex === subStr.length - 1) return validateSubString(subStr.slice(1, subStr.length - 1));
    return false;
}

function getClosingChar(char) {
    if(char === '(') return ')';
    if(char === '{') return '}';
    if(char === '[') return ']';
    return false;
}


console.log(validBraces('({})[({})]'));