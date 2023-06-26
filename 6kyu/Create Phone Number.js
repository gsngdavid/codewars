function createPhoneNumber(numbers){
  let code = numbers.slice(0, 3);
    let middle = numbers.slice(3, 6);
    let end = numbers.slice(6, 10);

    return `(${code.join('')}) ${middle.join('')}-${end.join('')}`;
}