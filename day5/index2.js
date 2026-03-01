"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
console.log((0, index_1.add)(2, 3));
function task1() {
    console.log("This is task 1");
}
function task2() {
    console.log("This is task 2");
}
console.log("Starting tasks...");
setTimeout(task1, 2000);
setTimeout(task2, 1000);
console.log(typeof setTimeout);
//# sourceMappingURL=index2.js.map