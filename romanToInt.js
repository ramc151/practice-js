function romantoint(num) {
    const romanConversion = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    let result = 0;
    let prev = 0;

    for (let i = num.length - 1; i >= 0; i--) {
        const value = romanConversion[num[i]]
        // console.log(value)
        if (value >= prev) {
            result += value
        } else {
            result -= value
        }
        prev = value;
    }
    return result
}

let num = 'MCMXCIV';
let ans = romantoint(num)
console.log(ans)