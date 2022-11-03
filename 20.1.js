let str = 'sss domain.ru zzz';
let match = str.match(/(\w+)\.(\w{1,3})/);
console.log(match[0], match[1], match[2]);