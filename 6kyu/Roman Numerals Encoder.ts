export function solution(number: number): string {
    let result = '';
    const romanNumerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    let count = 0;
    while(number !== 0) {
        let rem = number % 10;

        if (rem >= 1 && rem <= 3) result = romanNumerals[count].repeat(rem) + result;
        if (rem === 4) result = romanNumerals[count] + romanNumerals[count + 1] + result;
        if(rem >= 5 && rem <= 8) result = romanNumerals[count + 1] + romanNumerals[count].repeat(rem - 5) + result;
        if(rem === 9) result = romanNumerals[count] + romanNumerals[count + 2] + result;

        count += 2;
        number = Math.floor(number / 10);
    }

    return result;
  }