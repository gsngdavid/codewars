export const josephus = <T>(items: T[], k: number): T[] => {
    let result: T[] = [];
    let i = 0;
    let count = 1;

    while(items.length > 0) {
        if(count === k) {
            result.push(items.splice(i--, 1)[0]);
            count = 0;
        }
        if(++i === items.length) i = 0;
        count++;
    }
    return result;
}