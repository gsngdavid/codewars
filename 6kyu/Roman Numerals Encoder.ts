export function solution(number: number): string {
    console.log(number);
    let result = '';
    let count = 1;
    while(number !== 0) {
        let rem = number % 10;

        switch(count) {
            case 1:
                if (rem >= 1 && rem <= 3) result += 'I'.repeat(rem);
                if (rem === 4) result += 'IV';
                if(rem >= 5 && rem <= 8) result += 'V' + 'I'.repeat(rem - 5);
                if(rem === 9) result += 'IX';
                break;
            case 2:
                if (rem >= 1 && rem <= 3) result = 'X'.repeat(rem) + result;
                if (rem === 4) result = 'XL' + result;
                if(rem >= 5 && rem <= 8) result = 'L' + 'X'.repeat(rem - 5) + result;
                if(rem === 9) result = 'XC' + result;
                break;
            case 3:
                if (rem >= 1 && rem <= 3) result = 'C'.repeat(rem) + result;
                if (rem === 4) result = 'CD' + result;
                if(rem >= 5 && rem <= 8) result = 'D' + 'C'.repeat(rem - 5) + result;
                if(rem === 9) result = 'CM' + result;
                break;
            case 4:
                result = 'M'.repeat(rem) + result;
                break;

        }

        count++;
        number = Math.floor(number / 10);
    }


    console.log(result);
    return result;
  }