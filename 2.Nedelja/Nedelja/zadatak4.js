let n = 10;
let spaceStr = ' ';
let str = spaceStr.repeat(n);


for (n; n > 0; n--) {
    str = str.slice(1) + '#';
    console.log(str);
}
