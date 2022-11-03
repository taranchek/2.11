let str = 'func1() func2() func3()';

let match = str.match(/\w+(?=\(\))/g);

console.log(match);