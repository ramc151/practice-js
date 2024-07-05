function convert(str, numRows) {
    if (numRows == 1) return str;

    let n = str.length;
    let charsInsection = numRows * 2 - 2;
    let res = "";

    for (let row = 0; row < numRows; row++) {
        let i = row;
        while (i < n) {
            res += str[i]

            if (row != 0 && row != numRows - 1) {
                let charsInbetween = charsInsection - 2 * row;
                let secondindex = i + charsInbetween
                console.log(secondindex)
                if (secondindex < n) res += str[secondindex]
            }
            i += charsInsection
        }
    }
    return res
}



let str = "PAYPALISHIRING";
let numRows = 3;

let ans = convert(str, numRows)
// console.log(ans)