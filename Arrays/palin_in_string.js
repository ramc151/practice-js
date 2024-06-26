
function palin_str(str) {
    // let subString = [];
    let maxLen = "";
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            // subString.push(str.slice(i, j))
            if (str.slice(i, j) == str.slice(i, j).split("").reverse().join("") && str.slice(i, j).length > maxLen.length) {
                maxLen = str.slice(i, j)
            }
        }
    }
    // for (let i = 0; i < subString.length; i++) {

    //     if (subString[i] === subString[i].split("").reverse().join("") && subString[i].length > maxLen.length) {
    //         maxLen = subString[i]        
    //     }
    // }
    return maxLen
}


let string = 'abciamanamabb';
let ans = palin_str(string)
console.log(ans)