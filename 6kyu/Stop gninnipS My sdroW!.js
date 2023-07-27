function spinWords(string){
    return string.replace(/(\w+){5}/g, match => match.split('').reverse().join(''));
}