let n = 5;
let spaceStr = ' ';
let str = spaceStr.repeat(n);


for (let i = 1; i <= n; i++) {
    str = str.substring(1, n) + '#';
    console.log(str);
}
