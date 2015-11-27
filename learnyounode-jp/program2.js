'use strict'

let argv = process.argv.slice(2);
let nums = argv.map(str => parseInt(str));
let sum = nums.reduce((x, y) => x + y);

console.log(sum);