function yesNo(arr){
    let result = [];
    while(true) {
        result.push(arr.shift());
        if(arr.length === 0) break;
        arr.push(arr.shift());
    }
    return result;
}