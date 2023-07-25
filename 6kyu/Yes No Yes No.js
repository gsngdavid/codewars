function yesNo(arr){
    let start = 0;
    let result = [];
    
    while(arr.length > 0) {
        for(start; start < arr.length; start++) {
            result.push(arr.splice(start, 1)[0]);
        }
        start = arr.length % 2 === 0 ? 1 : 0;
    }
    return result;
}