let str = 'sss site.ru zzz site.com kkk';

let match = str.replace(/\w+\.\w{1,3}/g, '<a href="http://$&">$&</a>');

console.log(match);