export function orderedCount(text: string): [string, number][] {

    const arr: string[] = text.split('');
    const occ = arr.reduce((map: Map<string, number>, char: string) => {
        return map.set(char, (map.get(char) ?? 0) + 1);
    }, new Map<string, number>);
    
    return [...occ];
}