function validParentheses(parenStr) {
    // Your code here
    let length = parenStr.length;
    let pair = 0;
    
    // Check for the validity of the first paranthes
    if(parenStr[0] === ')') {
      return false;
    }
    
    // Check for the validity of the last paranthes
    if(parenStr[length - 1] === '(') {
      return false;
    }
    
    let numberOfOpen = 0;
    let numberOfClose = 0;
    
    // Loop through the string counting opened and closed paranthesis
    for(let i = 0; i < length; i++) {
      if(parenStr[i] === '(') {
        numberOfOpen++;
        pair++;
      }
      else {
        numberOfClose++;
        pair--;
      }
      
      // check if there is an a closed paranthese without opening it
      if(pair < 0) {
        return false;
      }
      
    }
    
    if(numberOfOpen === numberOfClose) {
      return true;
    }
    
    return false;
  }