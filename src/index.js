var uniqueRandomArray = require('unique-random-array');
var nollywoodnames = require('./nollywoodnames.json');

const getRandomItem = uniqueRandomArray(nollywoodnames);

module.exports = {
    all: nollywoodnames,
    random: random
};

function random(number) {
    if (number === undefined) {
        return getRandomItem();
    } else {
        const randomItems = [];
        for (let i = 0; i < number; i++) {
            randomItems.push(getRandomItem());
        }
        return randomItems;
    }
}
