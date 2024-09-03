 
const fs = require('fs');
const { transferableAbortSignal } = require('util');
var input = fs.readFileSync('./oscar_best_pictures.csv').toString();
let lines =  input.trim().split("\n");

console.table(lines);


