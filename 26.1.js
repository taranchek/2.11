let str = 'aaa [2] bbb [3] ccc [12] ddd';

let match = str.replace(/\[(\d+)\]/g, (match0, match1) => {
    return '['+Number(match1)*2+']';
});

console.log(match);