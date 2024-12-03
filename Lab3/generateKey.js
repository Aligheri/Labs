function random(min, max) {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateKey(length, characters) {
    let key = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = random(0, characters.length - 1);
        key += characters[randomIndex];
    }
    return key;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key);