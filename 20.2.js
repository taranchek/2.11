let str = '31.12.2025';
let match = str.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
console.log(match[0], match[1], match[2], match[3]);