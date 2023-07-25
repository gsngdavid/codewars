function validBraces(braces){
    const closingChar = getClosingChar(braces[0]);
}

function getClosingChar(char) {
    if(char === '(') return ')';
    if(char === '{') return '}';
    if(char === '[') return ']';
    return false;
}


  validBraces('(){}[]')