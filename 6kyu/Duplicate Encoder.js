function duplicateEncode(word){
    // ...
  // Convert stringt to array for easy manipulation
  let result = word.split('');
  let wordArr = word.toLowerCase().split('');
  
  // Array to store indeces of duplicate letters
  let duplicateIndeces = [];
  
  // Final converted string 
  let strResult = '';
  
  wordArr.map((char, i, arr) => {
    
    let duplicate = false;
    
    for(let j = i+1; j < arr.length; j++) {
      
      // Comparing each character with others to find a match and store its index in duplicateIndeces array
      if(char === arr[j]) {
        
        if( !(duplicateIndeces.includes(j)) ){
          duplicateIndeces.push(j);
        }
        if( !(duplicateIndeces.includes(i))) {
          duplicateIndeces.push(i);
        }
        }

    }
    
    return char;
  });
  
  // Convert result array according to duplicateIndeces
  result = result.map((char, index) => {
    if(duplicateIndeces.includes(index)) {
      return ')';
    }
    return '(';
  });
  
  // Finally convert result array to string
  for(let x = 0; x < result.length; x++) {
    strResult += result[x];
  }
  
  return strResult;
}