export const isPangram = (phrase: string): boolean => {
    phrase = phrase.toLowerCase();
    let chars = 'abcdefghijklmnopqrstuvwxyz';
    for(let char of chars) {
      if(!phrase.includes(char)) return false;
    }
      return true;
  }