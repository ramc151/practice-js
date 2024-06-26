function OddCounts(arr) {
    const counts = {};

    // Count occurrences of each number
    for (const num of arr) {
        counts[num] = (counts[num] || 0) + 1;
    }

    // Check if all counts are odd
    for (const count in counts) {
        if (counts[count] % 2 === 0) {
            return false;
        }
    }

    return true;
}

// Example usage
const array = [1, 1, 2, 2, 3, 3];
console.log(OddCounts(array));