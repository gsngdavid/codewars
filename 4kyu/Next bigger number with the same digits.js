function nextBigger(n){
    let strNum = ""+n;    
    let result = '';
    let i = strNum.length - 1;
    
    while(i > 0) {
        if(strNum[i] <= strNum[i - 1]) {
            i--;
            continue;
        }
        const sortedEndArr = strNum.slice(i - 1).split('').sort();
        const nextChar = sortedEndArr.find(e => e > strNum[i - 1]);
        const nextCharIndex = sortedEndArr.indexOf(nextChar);
        result = strNum.slice(0, i - 1) + sortedEndArr.splice(nextCharIndex, 1)[0] + sortedEndArr.join('');

        return +result;
    }
    return -1;
}