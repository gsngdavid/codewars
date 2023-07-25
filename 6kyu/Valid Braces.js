function validBraces(braces) {
    if(braces.length === 0) return true;
    const closingChar = getClosingChar(braces[0]);
    if(!closingChar) return false;
    let closingCharIndex = braces.indexOf(closingChar);
    if(closingCharIndex === -1) return false;

    let subString = braces.slice(1, closingCharIndex);
    if(subString.includes(braces[0])) closingCharIndex = braces.lastIndexOf(closingChar);
    
    const subStringIsValid = validateSubString(braces.slice(1, closingCharIndex));
    
    if(!subStringIsValid) return false;
    return validBraces(braces.slice(closingCharIndex + 1));
}

function validateSubString(subStr) {
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