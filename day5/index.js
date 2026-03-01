// console.log("Hello World");
// let a = 10;
// a=20;0
// console.log(a);
// // a="Florence";
// let g:any=20;
// console.log(g);
// g="Florence";
// console.log(g);
// let arr=[1,2,3,4];
// let arr1:[number,string,boolean]=[1,"Florence",true];// considered as tuple(heterogeneous array)
// console.log(arr);
// console.log(arr1);
// let stud:{
//     name:string,
//     age:number
//     rollno?:number // optional property
// } = {
//     name:"Florence",
//     age:22
// }
// function greet(name:string,age:number){
//     console.log(`Hello ${name}, you are ${age} years old.`);
// }
// greet("Florence",22);
// function add(a:number,b:number){
//     let sum = a+b;
//     console.log(sum);
//     return sum;
// }
// add(2,3);
// let c=()=>{
//     console.log("This is an arrow function");
// }
// c();
// let arr3:readonly(number|string)[]=[1,"Florence",2,"Hello"];
// // arr3.push(3);
// // arr3.push("World");
// console.log(arr3);
// console.log(typeof(c));
// console.log(typeof(arr3));
// //Interface
// interface person{
//     name:string,
//     age:number,
//     Gender:string
// }
// let p1:person={
//     name:"Florence",
//     age:22,
//     Gender:"Female"
// }
// console.log(p1);
// class demo{
//     constructor(){
//     }
// }
// class car{
//     private brand:string;
//     color:string="Red";
//     display():void{}
//     constructor(brand:string,color:string){
//         this.brand=brand;
//         this.color=color;
//         this.display=()=>{
//             console.log(`This is a ${this.color} ${this.brand}`);
//         }
//     }
//     start():void{
//         console.log("Car started");
//     }
// }
// let c=new car("BMW","Black");
// c.color="Blue";
// console.log(c.display());
// console.log(c.color);
// c.start();
// 
// class person {
//     name: string;
//     constructor(name: string) {
//         this.name = name;   // assign value
//     }
// }
// class teacher extends person {
//     company: string;
//     constructor(name: string, company: string) {
//         super(name);        // call parent constructor
//         this.company = company; // assign value
//     }
//     display() {
//         console.log(this.company, this.name);
//     }
// }
// let t = new teacher("abc", "xyz");
// t.display();
// let obj={
//     name:"Florence",
// }
// console.log(obj);
// export function add(a:number,b:number):number{
//     return a+b;
// }
// console.log(add(10,20));
// let p1= new Promise<string>((resolve,reject)=>{
//     let success;
//     if(success){
//         resolve("Promise resolved successfully");
//     }else{
//         reject("Promise rejected");
//     }
// });
// p1.then((message)=>{
//     console.log(message);
// }).catch((error)=>{
//     console.log(error);
// });
// let p1 = new Promise((resolve) => {
//     resolve(42);
// });
// p1.then((value) => {
//     console.log(25 + value);
//     return value;
// })
//     .then((value) => {
//     console.log(10 * value);
//     return value;
// })
//     .then((value) => {
//     console.log(value / 2);
//     return value;
// })
//     .then((value) => {
//     console.log(value - 5);
//     return value;
// });
let p1 = new Promise((resolve, reject) => {
    reject(42);   // rejecting instead of resolving
});

p1
.then((value) => {
    console.log(25 + value);
    return value;
})
.then((value) => {
    console.log(10 * value);
    return value;
})
.then((value) => {
    console.log(value / 2);
    return value;
})
.catch((error) => {
    console.log("Error caught:", error);
    return error;   // returning value continues chain
})
.then((value) => {
    console.log("After catch:", value - 5);
});