let arr = [1, 2, 3, 1, 3, 5, 6]

let data = arr.filter((items, index) => {
    return arr.indexOf(items) !== index;
})
console.log(data)