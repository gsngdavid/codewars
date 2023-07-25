function yesNo(arr){
    let result = [];
    while(true) {
        result.push(arr.splice(0, 1)[0]);
        if(arr[0] === undefined) break;
        arr.push(arr.splice(0, 1)[0]);
    }
    return result;
}