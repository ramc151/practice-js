function atoi(s) {
    const max = 2147483647;
    const min = -2147483648;
    let arr = [];
    let i = 0;
    let positive = true;

    while (s[i] === " ") i++;

    if (s[i] == '+' || s[i] == '-') {
        if (s[i] == '-') positive = false;
        i++;
    }

    while (s[i] == '0') i++;
    while (parseInt(s[i])) {
        arr.push(s[i]);
        i++;
    }
    const number = positive ? Number(arr.join("")) : Number(arr.join("") * -1);
    if (number > max) return max;
    if (number < min) return min;
    return number;

}

let str = "21474836460"
let ans = atoi(str)
console.log(ans)

let str1 = "010"
let ans1 = atoi(str1)
console.log(ans1)
