let str = '123 456 789';

let match = str.replace(/\d+/g, (match0) => {
    return match0.split("").reverse().join("");
});

console.log(match);