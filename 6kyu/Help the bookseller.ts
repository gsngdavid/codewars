export const stockList = (listOfArt:string[], listOfCat:string[]):string => {
    if(listOfArt.length === 0 || listOfCat.length === 0) return '';

    return listOfCat.reduce((acc, cur) => {
      let qty = 0;
      listOfArt.forEach(el => el.startsWith(cur) && (qty += +el.split(' ')[1]) );
      return `${acc}(${cur} : ${qty}) - `;
    }, '').slice(0, -3);
}