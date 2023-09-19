export const josephus = <T>(items: T[], k: number): T[] => {
    let result: T[] = [];
    let i = (k - 1) % items.length;
    
    while(items.length) {
        result.push(items.splice(i, 1)[0]);
        i = (i + k - 1) % items.length;
    }
    return result;
}