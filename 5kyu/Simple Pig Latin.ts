export const pigIt = (a : string) : string =>  {
    return a.replace(/(\w)(\w+)*/g, "$2$1ay");
}