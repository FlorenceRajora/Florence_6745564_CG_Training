import {add} from './index';
console.log(add(2,3));

function task1():void{
    console.log("This is task 1");
}
function task2():void{
    console.log("This is task 2");
}
console.log("Starting tasks...");
setTimeout(task1,2000);
setTimeout(task2,1000);
console.log(typeof setTimeout);