let str = 'aaa bbb ccc xyz';

let match = str.match(/([a-z])\1\1/g);

console.log(match);