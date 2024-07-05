// function reverseArray(a) {
//     // Write your code here
//     let reverse = [];
//     let i;
//     for (i = a.length - 1; i >= 0; i--) {
//         reverse.push(a[i])
//     }

//     return reverse
// }
// let a = [1, 4, 3, 2]
// let ans = reverseArray(a)
// console.log(ans)


function reverse(x) {
    let res = 0;
    if (x < 0) {
        res = parseInt(String(x).slice(1).split('').reverse().join('')) * -1;
    } else {
        res = parseInt(String(x).split('').reverse().join(''));
    }

    return res;
};

let x = 120;
let ans = reverse(x)
// console.log(ans)