export function foldArray(array:number[], runs:number):number[] {
    let myArray: number[] = [];
    let result: number[] = [];
    myArray = [...myArray, ...array];
    array = [];
    
    while(runs !== 0) {
        let stop = Math.floor(myArray.length / 2);
        for(let i = 0; i < stop; i++) {
            result.push(myArray.shift()! + myArray.pop()!);
        }
        myArray[0] && result.push(myArray.shift()!);
        runs--;
        if(runs !== 0) {
            myArray = result;
            result = [];
        } 
    }
    if(result.length === 0) return [0];
    return result;
}