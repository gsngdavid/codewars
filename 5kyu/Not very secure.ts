export function alphanumeric(string: string): boolean {
    if(string === '') return false;

    const regex = /(?=.*[ _\W]).{1,}/g;
    return !regex.test(string);
}