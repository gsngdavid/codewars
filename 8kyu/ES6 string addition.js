function joinStrings(string1, string2){
    if(typeof string1 !== 'string') string1 = String(string1);
    if(typeof string2 !== 'string') string2 = String(string2);

    return `${string1} ${string2}`;
 }