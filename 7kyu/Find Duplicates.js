function findDuplicates(duplicates, cur, i, arr) {
    if(i !== arr.indexOf(cur) && duplicates.indexOf(cur) === -1) {
      duplicates.push(cur);
    }
    return duplicates;
  }
  
  function duplicates (arr) {
    return arr.reduce(findDuplicates, []);
  }