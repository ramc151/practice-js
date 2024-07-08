function inttoroman(num) {
    let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

    let result = "";
    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            result += roman[i];
            num -= values[i]
        }
    }
    return result
}

let num = 1094;
let ans = inttoroman(num);
console.log(ans)