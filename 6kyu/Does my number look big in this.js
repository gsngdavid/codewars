function getlength(number) {
    return number.toString().length;
  }
  
  function narcissistic(value) {
    // Code me to return true or false
  
    let sum = 0;
    // Get number of digits on value
    let digits = getlength(value);
    
    let temp = value;
    
    while (temp > 0) {
        let remainder = temp % 10;
  
        sum += Math.pow(remainder, digits);
  
        //Get rid of the last digit from the number
        temp = parseInt(temp / 10);
    }
    
    // Check the condition
    if (sum == value) {
      return true;
    }
     return false;
  }