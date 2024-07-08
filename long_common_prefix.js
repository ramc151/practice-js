function longestCommonPrefix(arr) {
    if (arr.length == 0) return '';

    for (let i = 0; i <= arr[0].length; i++) {
        if (!arr.every((string) => string[i] === arr[0][i])) {
            return arr[0].slice(0, i);
        }
    }
    return arr[0]
}

const arr = ["a"];
let ans = longestCommonPrefix(arr)
console.log(ans)