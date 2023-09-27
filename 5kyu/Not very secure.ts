export function alphanumeric(string: string): boolean {
    return /^[a-zA-Z\d]+$/.test(string);
}