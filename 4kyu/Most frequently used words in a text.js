function topThreeWords(text) {
    const newText = text.toLowerCase().replace(/[^\w ']/g, '').replace(/ +/g, ' ').trim();
    const wordArray = newText.split(' ');
    const wordCount = wordArray.reduce((obj, cur) => {
        obj[cur] = obj[cur] >= 1 ? obj[cur] + 1 : 1;
        return obj;
    }, {});
    
    const wordCountArray = Object.entries(wordCount);
    const sortedWords = wordCountArray.sort((a, b) => b[1] - a[1]);

    return sortedWords.slice(0, 3).map(e => e[0]).filter(e => e !== '' && e !== "'");
}