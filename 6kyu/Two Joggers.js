function nbrOfLaps(x, y) {
    let [max, min] = x > y ? [x, y] : [y, x];
    const lar = max;
      
    while(max % min !== 0) max+= lar;
      return [max / x, max / y];
  }