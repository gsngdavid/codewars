function add(n){
    const sum = (y) => add(n+y);
    sum.valueOf = () => n;
    return sum;
  }