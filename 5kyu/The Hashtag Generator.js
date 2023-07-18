function generateHashtag (str) {
    const hashTag = str.replace(/\s+/g, " ").trim();
    if(hashTag.length === 0) return false;

    let result = '#';

    hashTag.replace(/\w+/g, word => {
        result += word[0].toUpperCase() + word.slice(1);
    });
    return result.length > 140 ? false : result;
}

console.log(generateHashtag('david good me'));