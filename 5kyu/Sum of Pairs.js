function sumPairs(ints, s) {
    let index = 1;
    const prevValues = [];
    
    while(true) {
      if(index > ints.length) return undefined;
      const curCompare = ints[index];
      if(prevValues[curCompare] !== undefined) {
        index++;
        continue;
      }
      for(let i = 0; i < index; i++) {
        if(ints[i] + curCompare === s) return [ints[i], curCompare];
      }
      prevValues[curCompare] = 1;
      index++;
    }
}