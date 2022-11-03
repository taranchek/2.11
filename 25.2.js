let str = '<a href="" class="eee" id="zzz">';

let match = str.match(/[a-z]+(?=\=\"\w*\")/g);

console.log(match);