let str = 'a aa aaa aaaa aaaaa';

let match = str.match(/([a-z])\1+/g);

console.log(match);