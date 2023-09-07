function makeLooper(str) {
    const iterator = repeater(str);
    return () => iterator.next().value;
}

function *repeater(str) {
    let index = 0;
    while(true) {
        yield str[index];
        if(index < str.length) index++;
        if (index >= str.length) index = 0;
    }
}