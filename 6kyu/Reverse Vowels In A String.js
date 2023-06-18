function reverseVowels(str) {
    let vowels = str.replace(/[^aeiuo]/gi, '').split('');
    return str.replace(/[aeiuo]/gi, _ => vowels.pop());
  }