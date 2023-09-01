export function number(array: string[]): string[]{
    return array.map((str, i) => `${i + 1}: ${str}`);
  }