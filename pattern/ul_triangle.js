let n = 5;

for (let i = 1; i <= n; i++) {
    let star = "* "
    console.log(star.repeat(i))
}

for (let i = 1; i <= n; i++) {
    let star = "* "
    let space = "  ";
    console.log(space.repeat(n - i) + star.repeat(i))
}

for (let i = n; i >= 1; i--) {
    let star = "* ";
    let space = "  ";
    console.log(space.repeat(n - i) + star.repeat(i))
}

for (let i = n; i >= 1; i--) {
    let star = "* ";
    console.log(star.repeat(i))
}