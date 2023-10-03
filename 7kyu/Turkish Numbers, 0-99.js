const getTurkishNumber = (num) => {
	const names = ['sıfır', 'bir', 'iki', 'üç', 'dört', 'beş', 'altı', 'yedi', 'sekiz', 'dokuz', 'on', 'yirmi', 'otuz', 'kırk', 'elli', 'altmış', 'yetmiş', 'seksen', 'doksan']
    num += '';

    if(num[1] === '0') return names[+num[0] + 9];
    if(num[1]) return `${names[+num[0] + 9]} ${names[+num[1]]}`;
    return names[+num];
}