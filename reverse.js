function reverseArray(a) {
    // Write your code here
    let reverse = [];
    let i;
    for (i = a.length - 1; i >= 0; i--) {
        reverse.push(a[i])
    }

    return reverse
}
let a = [1, 4, 3, 2]
let ans = reverseArray(a)
console.log(ans)