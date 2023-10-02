export const pigIt = (a : string) : string =>  {
    return a.replace(/\w+/g, word => word.slice(1) + word[0] + 'ay');
}