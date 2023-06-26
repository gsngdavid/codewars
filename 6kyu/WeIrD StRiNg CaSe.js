function toWeirdCase(string){
    let result = '';
    for(let i = 0, even = true; i < string.length; i++, even = !even) {
      if(string[i] !== ' ') {
        if(even) {
          result += string[i].toUpperCase();
        }
        else {
          result += string[i].toLowerCase();
        }
      }
      else {
        even = false;
        result += string[i];
      }
    }
    return result;
  }