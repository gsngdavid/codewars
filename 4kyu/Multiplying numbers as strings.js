function multiply(a, b) {
    let carry = 0;
    const products = [];
    let finalResult = '';
    for(let i = b.length - 1, zeros = 0; i >= 0; i--, zeros++) {
        let product = '';
        for(let j = a.length - 1; j >= 0; j--) {
            let result = String((+b[i] * +a[j]) + carry);

            if(j === 0) {
                product = result + product;
                carry = 0;
            }
            else {
                product = (result[1] ?? result[0]) + product;
                carry = Number(result[1] ? result[0] : 0);
            }
        }
        products.push(product + '0'.repeat(zeros));
    }

    // Adding Array elements
    const colNumber = products[products.length - 1].length;
    const transformedProducts = products.map(el => {
        if(el.length < colNumber) {
            el = "0".repeat(colNumber - el.length) + el;
        }
        return el;
    });
    for(let col = colNumber - 1; col >= 0; col--) {
        let result = carry;
        for(let row = 0; row < transformedProducts.length; row ++) {
            result += +transformedProducts[row][col];
        }
        if(col === 0) {
            finalResult = String(result) + finalResult;
            carry = 0;
            continue;
        }
        finalResult = String(result)[1] ? String(result).slice(-1) + finalResult : String(result)[0] + finalResult;
        carry = String(result)[1] ? +String(result).slice(0, -1) : 0;
    }
    finalResult = finalResult.replace(/^0+/, '');
    return finalResult ? finalResult : '0';
}