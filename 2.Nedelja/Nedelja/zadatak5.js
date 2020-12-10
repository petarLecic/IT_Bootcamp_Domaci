let n = 7;

let str1 = ' '.repeat(n);
let str2 = '';
for (let i = 1; i <= n; i++) {
    str2 += '#'
    str1 = str1.slice(1) + '#';
    console.log(str1.concat(' ', str2));
}