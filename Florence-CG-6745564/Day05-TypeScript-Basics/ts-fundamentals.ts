console.log("hii");

let a =10
a=20

// Type annotation
let b:string="hello"
let c:number=20


let number=10
let str="Florence"
let d:boolean=true
let e:null=null
let f:undefined=undefined

let g:any=20
g="hii"
g=true

console.log(str)

// 

let arr:number[]=[10,20,20,30]
arr.push(50)
console.log(arr);

// let arr1:["bcvhsd", true,553646,34567]

let arr2: [string,boolean,number,number] = ["bcvhsd", true, 553646, 34567];

console.log(number)

console.log(arr)
console.log(arr2)


let student:{
    name: string,
    age:number
    rollno?:number
}={
    name:"Florence",
    age:22
}

function greet(name?:string,age?:number){
    console.log(` ${name} and ${age} `);
}

greet("Florence",22)

let sum = (a:number,b:number):number=>{
    return a+b;
}
console.log(sum(10,20));

let arr3:readonly(string|number)[]=[234,"FDFD",4634,"dnfksdf"];
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

class  demo{
    //?properties
    //?methods
    //?constructor--> special method
    constructor(){
        
    }
}

class Car{
    brand:string;
    colour:string="blue";
    display():void{
        console.log("display");
    }
    constructor(brand:string,colour:string){
        this.brand=brand;
        this.colour=colour;
        this.display();
        this.display=()=>{
            console.log("new display");
        };
        this.display();
    }

    start():void{
        console.log("This is my car");
    }

}

let ca = new Car("Maruti","black");
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

export function add(a:number,b:number):number{
    return a+b
}
console.log(add(10,20));

export let name:string="Florence";
