function getLargest(str) {
    return str.split('').sort((a,b) => b - a).join('');
}

function nextBigger(n){
    let strNum = ""+n;
    let largest = getLargest(strNum);
    if( largest <= strNum) return -1;
    
    let result = null;
    let i = strNum.length - 2;
    
    while(i >= 0) {
        let end = strNum.slice(i);
        let largestEnd = getLargest(end);

        if( largestEnd <= end) {
            i--;
            continue;
        }
        const sortedEndArr = end.split('').sort();
        const nextChar = sortedEndArr.find(e => e > strNum[i]);
        const nextCharIndex = sortedEndArr.indexOf(nextChar);
        result = strNum.slice(0, i) + sortedEndArr.splice(nextCharIndex, 1)[0] + sortedEndArr.join('');

        return +result;
    }
}