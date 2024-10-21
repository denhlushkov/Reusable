'use strict';

// Implement function `rangeOdd(start: number, end: number)` returning
// array with all odd numbers from the range [15, 30] including endpoints

const rangeOdd = (start, end) => {
    const l = Math.ceil((end - start) / 2);
    if (l < 0) return [];
    const array = new Array(l);
    let i = 0;
    for (let n = start; n <= end; n++){
        if (n % 2 !== 0){
            array[i++] = n;
        };
    }
    return array;
};
module.exports = { rangeOdd };
