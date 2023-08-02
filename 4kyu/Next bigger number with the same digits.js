function nextBigger(n){
    let str = ""+n;
    let largest = str.split('').sort((a,b) => b - a).join('');
    if( largest <= str) return -1;
    
    let result = null;
    let i = str.length - 2;
    
    while(i >= 0) {
        let end = str.slice(i);
        let largestEnd = end.split('').sort((a,b) => b - a).join('');

        if( largestEnd <= end) {
            i--;
            continue;
        }
        const sortedEndArr = end.split('').sort();
        const nextChar = sortedEndArr.find(e => e > str[i]);
        const nextCharIndex = sortedEndArr.indexOf(nextChar);
        result = str.slice(0, i) + sortedEndArr.splice(nextCharIndex, 1)[0] + sortedEndArr.join('');

        return +result;
    }
}