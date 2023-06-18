function findAverage(array) {
    if(array.length === 0) {
      return 0;
    }
    
    let total = 0;
    
    for(let i = 0; i < array.length; i++) {
      total = total + array[i];
    }
    
    return total / array.length;
    
  }