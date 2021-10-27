//gotten from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
function importAll(r) {
    let images = Object.create( {} );
    r.keys().forEach(item => { images[item.replace('./', '')] = r(item).default; });
    return images;
}

const itemImages = importAll(require.context('./components/assets/items', false, /\.(png)$/));

const prices = [
    200, 
    200, 
    200, 
    1000, 
    400, 
    3000, 
    600, 
    1500, 
    100, 
    2500, 
    900, 
    300, 
    200, 
    300, 
    200, 
    2000, 
    700, 
    700, 
    800
];

const itemInfo = [];
    Object.keys(itemImages).forEach((item, index) => itemInfo.push({
        name: item.replace('.png', ''),
        pic: itemImages[item], 
        price: prices[index]}));

function toWords(name) {
    let words = name.split('_');
    let finalWord= '';
    for (let word of words) finalWord += word.charAt(0).toUpperCase() + word.slice(1) + ' ';
    return finalWord;
}

export { itemInfo, toWords };