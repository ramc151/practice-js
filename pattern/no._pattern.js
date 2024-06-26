let rows = 5;
let pattern = "";

// for (let n = 1; n <= rows; n++) {
//     for (let num = 1; num <= n; num++) {
//         pattern += num;
//     }
//     pattern += '\n'
// }

// for (let n = 1; n <= rows; n++) {
//     for (let num = 1; num <= n; num++) {
//         pattern += n;
//     }
//     pattern += '\n'
// }

// let rows = 4;
// let variable = 1;
// for (let n = 1; n <= rows; n++) {
//     for (let num = 1; num <= n; num++) {
//         pattern += variable + " ";
//         variable++
//     }
//     pattern += "\n"
// }

// for (let n = 1; n <= rows; n++) {
//     for (let num = 1; num <= rows + 1 - n; num++) {
//         pattern += num
//     }
//     pattern += "\n"
// }

for (let n = 1; n <= rows; n++) {
    for (let space = 1; space <= rows - n; space++) {
        pattern += " ";
    }
    for (let num = 1; num <= 2 * n - 1; num++) {
        pattern += num;
    }
    pattern += '\n'
}

console.log(pattern)