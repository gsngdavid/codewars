function findOdd(A) {
    let result = A[0];
    
    A.forEach(e => {
      let count = 0;
      for(let i of A) {
        if(e === i) {
          count++;
        }
      }
      
      if(count % 2 !== 0) {
        result = e;
      }
    });
    return result;
  }