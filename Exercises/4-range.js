'use strict';

// Implement function `range(start: number, end: number): array` returning
// array with all numbers from the range [15, 30] including endpoints

const range = (start, end) => {
    const l = end - start;
    if (l < 0) return [];
    const array = new Array(l);
    let i = 0;
    for (let n = start; n <= end; n++){
        array[i++] = n;
    }
    return array;
};

module.exports = { range };
