let str = '31.12.2025';
let match = str.replace(/(\d{1,2})\.(\d{1,2})\.(\d{4})/g, '$3.$2.$1');
console.log(match);