let str = 'a1b2c3';

let match = str.replace(/\d/g, '$&$&');

console.log(match);