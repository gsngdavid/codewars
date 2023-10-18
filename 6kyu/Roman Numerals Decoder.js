function getNumeric(roman) {
    if(roman === 'I') return 1;
    if(roman === 'V') return 5;
    if(roman === 'X') return 10;
    if(roman === 'L') return 50;
    if(roman === 'C') return 100;
    if(roman === 'D') return 500;
    if(roman === 'M') return 1000;
}

function solution (roman) {
    return roman.split('').reduce((number, romanChar, index, romanChars) => {
        const previousNumber = getNumeric(romanChars[index - 1]) ?? 0;
        const currentNumber = getNumeric(romanChar);

        // Subtract the previous number if it is smaller than the current number ex: IV = 4
        if(previousNumber < currentNumber) return number + (currentNumber - previousNumber * 2);
        return number + currentNumber;
    }, 0);
}