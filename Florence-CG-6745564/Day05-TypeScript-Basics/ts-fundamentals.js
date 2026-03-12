"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = void 0;
exports.add = add;
console.log("hii");
var a = 10;
a = 20;
// Type annotation
var b = "hello";
var c = 20;
var number = 10;
var str = "Florence";
var d = true;
var e = null;
var f = undefined;
var g = 20;
g = "hii";
g = true;
console.log(str);
// 
var arr = [10, 20, 20, 30];
arr.push(50);
console.log(arr);
// let arr1:["bcvhsd", true,553646,34567]
var arr2 = ["bcvhsd", true, 553646, 34567];
console.log(number);
console.log(arr);
console.log(arr2);
var student = {
    name: "Florence",
    age: 22
};
function greet(name, age) {
    console.log(" ".concat(name, " and ").concat(age, " "));
}
greet("Florence", 22);
var sum = function (a, b) {
    return a + b;
};
console.log(sum(10, 20));
var arr3 = [234, "FDFD", 4634, "dnfksdf"];
console.log(arr3);
//syntax of interface
//  interface Interface_name{
// property:type
// }
// interface Person{
//     name:string,
//     age:number,
//     readonly id:number,
//     gender?:string,
// }
// let obj:Person={
//     name:"Kaka",
//     age:21,
//     id:432,
//     gender:"Male"
// }
// console.log(obj.name);
// interface Animal{
//     name:string,
//     age:number
// }
// interface Dog extends Animal{
//     breed?:string
// }
// let myDog:Dog={
//     name:"cupcake",
//     age:3,
//     // breed:"Pitbull"
// }
// interface Car{
//     brand:string,
//     colour:string,
//     sunroof():string
// }
// let myCar:Car={
//     brand:"Toyota",
//     colour:"black",
//     sunroof(){
//         return "Sunroof is open";
//     }
// }
// console.log(myCar);
// console.log(myCar.sunroof());
//OOPS//
//Class - blueprint or structure of object
var demo = /** @class */ (function () {
    //?properties
    //?methods
    //?constructor--> special method
    function demo() {
    }
    return demo;
}());
var Car = /** @class */ (function () {
    function Car(brand, colour) {
        this.colour = "blue";
        this.brand = brand;
        this.colour = colour;
        this.display();
        this.display = function () {
            console.log("new display");
        };
        this.display();
    }
    Car.prototype.display = function () {
        console.log("display");
    };
    Car.prototype.start = function () {
        console.log("This is my car");
    };
    return Car;
}());
var ca = new Car("Maruti", "black");
// ca.brand="Maruti";
console.log(ca.brand);
console.log(ca);
console.log(ca.display());
//!Access Modifiers
// public
// private
// protected
//basic inheritance
// class Animal{
//     eat(){
//         console.log("All animals eat");
//     }
// }
// class Cat extends Animal{
//     sound(){
//         console.log("Meow");
//     }
// }
// let cat = new Cat();
// cat.eat();
// cat.sound();
// class Person{
//     name:string="abc";
//     constructor(name:string){
//         this.name=name;
//     }
// }
// class teacher extends Person{
//     company:string="test yantra";
//     constructor(company:string,name:string){
//         super(name);
//         // this.name = name;
//         // this.company=company;
//     }
//     display(){
//         console.log(this.name);
//         console.log(this.company);
//     }
// }
// let t = new teacher("abc","def");
// t.display();
// console.log(t);
// let obj={
//     name:"fghj"
// }
// console.log(obj.name);
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
exports.name = "Florence";
