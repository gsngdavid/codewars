function flipNumber(n) {
  let result = '';
  let strArr = n.split('');
  let numLength = strArr.length;

    for(let i = 0; i < numLength; i++) {
        strArr.reverse();
        result += strArr[0];
        strArr.shift();
    }
  return result;
}