let str = 'string string aaaa dd awidjmaw';
console.log(str.replace(/\b(\w+)\b(?:\s+\1\b)+/g, ''));
