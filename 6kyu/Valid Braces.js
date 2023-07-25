function validBraces(braces) {
    return validateSubString(braces);
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


console.log(validBraces('([{[)]}])'));