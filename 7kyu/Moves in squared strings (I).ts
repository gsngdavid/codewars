export function vertMirror(strng: string) {
    const arr = strng.split('\n');
    return arr.map(word => word.split('').reverse().join('')).join('\n');
}
export function horMirror(strng: string) {
    const arr = strng.split('\n');
    return arr.reverse().join('\n');
}
export function oper(fct: (s: string) => string, s: string) {
    return fct(s);
}