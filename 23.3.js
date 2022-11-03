let str = 'aaa aaa bbb bbb ccc ddd';

let match = str.match(/([a-z]+)\s\1/g);

console.log(match);