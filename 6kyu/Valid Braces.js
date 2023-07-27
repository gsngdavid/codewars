function validBraces(braces){
    const matches = {'(': ')', '{': '}', '[': ']'};
    const stack = [];
    
    for(let i = 0; i < braces.length; i++) {
      const cur = braces[i];
      if(matches[cur]) stack.push(cur);
      else if(matches[stack.pop()] !== cur) return false;
    }
    
    return !stack.length;
}