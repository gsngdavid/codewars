function diag1Sym(strng) {
    let sepatated_parts = strng.split('\n');
    let n = sepatated_parts.length;

    let result = [];

    for(let col = 0; col < n; col++) {
        let newStr = '';

        for(let row = 0; row < n; row++) {
            newStr += sepatated_parts[row][col];
        }

        result.push(newStr);
    }

    return result.join('\n');
}

function rot90Clock(strng) {
    let str = diag1Sym(strng);
      let sepatated_parts = str.split('\n');

      let result = sepatated_parts.map(element => element.split('').reverse().join(''));

      return result.join('\n');
}

function selfieAndDiag1(strng) {
  let str_diag_1_sym = diag1Sym(strng);

    let part_1 = strng.split('\n');
    let part_2 = str_diag_1_sym.split('\n');
    
    let n = part_1.length;

    let result = [];

    for(let i = 0; i < n; i++) {
        result.push(part_1[i] + '|' + part_2[i]);
    }
    return result.join('\n');
}

function oper(fct, s) {
  return fct(s)

}