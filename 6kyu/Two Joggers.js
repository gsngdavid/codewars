var nbrOfLaps = function (x, y) {
    let max = x > y ? x : y;
    
    while(true) {
      if(max % x === 0 && max % y === 0) return [max / x, max / y];
      max++;
    }
  }