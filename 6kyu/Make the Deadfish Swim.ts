/** return the output array and ignore all non-op characters */
export function parse(data: string): number[] {
    const result: number[] = [];
    let value = 0;

    for(let char of data) {
        switch(char) {
            case 'i': value++; break;
            case 'd': value--; break;
            case 's': value *= value; break;
            case 'o': result.push(value);break;
            default: continue;
        }
    }
    return result;
  }