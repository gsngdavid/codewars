export function foldArray(array:number[], runs:number):number[] {
    const result = [...array];
    
    while(runs > 0) {
        result.forEach((val, i, arr) => {
            arr[i] = i + 1 === arr.length ? val : val + arr.pop()!;
        });
        runs--;
    }
    return result;
}