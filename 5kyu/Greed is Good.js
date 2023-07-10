function score( dice ) {
    let score = 0;

    let countedNum = dice.reduce((obj, cur) => {
        return {
            ...obj,
            [cur]: obj[cur] ? (obj[cur] + 1) : 1
        };
    }, {});
    
    for(let num in countedNum) {
        if(countedNum[num] >= 3) {
            countedNum[num] = countedNum[num] - 3;
            if( +num === 1) {
                score += 1000 + countedNum[num] * 100;
            }
            else if(+num === 5) {
                score += 500 + countedNum[num] * 50;
            }
            else { 
                score += +num * 100;
            }
        }
        else {
            if(+num === 1) score += countedNum[num] * 100;
            if(+num === 5) score += countedNum[num] * 50;
        }
    }
    return score;
  }