// "use strict";

let array = [1, 2, 3, 4, 5];
console.log(array);
//homogeneous array

let stud = ["ram", 21, "JECRC", "CS", true];
console.log(stud);
//heterogeneous array

//object
let student = {
    name: "ram",
    age: 21,
    city: "JECRC",
    branch: "CS",
    isPlaced: true
};
console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.city);
console.log(student.branch);
console.log(student.isPlaced);

function add() {
    let a = 10;
    let b = 20;
    console.log(a + b);
}
add();
add();

//named function
function sub(a, b = 5) {
    console.log(a - b);
    return a - b;
}

console.log(sub(10));
console.log(sub(10, 10));

//anonymous function
let a = function () {
    console.log("hii");
}
// console.log(a());
a();

(function () {
    console.log("hello");
}())

g = 100;
console.log(g);

//Block Scope
{
    let x = 10;
    var y = 20;
    const z = 13;
    console.log(x);
    console.log(y);
    console.log(z);
}
// console.log(x);
// console.log(y);
// console.log(z);

//Arrow Function
let z = (n) => n * 2;
//function storing inside the variable is known as function expression.

// whichever function we are storing inside the variable is known as first class function/first citizen function.



// console.log("Hii");

// console.log("Class");  
// z();
console.log(z(4));