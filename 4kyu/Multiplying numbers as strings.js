function multiply(a, b) {
    const BigInt = 1n.__proto__.constructor;
    
    return (BigInt(a) * BigInt(b)).toString();
  }