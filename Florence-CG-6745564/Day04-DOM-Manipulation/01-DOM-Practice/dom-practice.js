// console.log(window);


// console.log("hello");
// window.console.log("hello");


// console.log(document);
// console.log(document.body);
// console.log(document.head);
// console.log(document.head);

// //DON -> DOCUMENT OBJECT MODEL
// //It is tree like structure

// console.log(document.body.childNodes);
// console.log(document.body.children);
// console.log(document.body.children[2]);

// let btn1 = document.body.children[2];
// console.log(btn1.parentElement);
// console.log(btn1.parentNode);

// // console.log(document.body.children[3]);
// // let div1 = document.body.children[3];
// // console.log(div1.firstElementChild);
// // console.log(div1.lastElementChild);
// // console.log(div1.nextElementSibling);
// // console.log(div1.previousElementSibling);

// // let head1 = div1.firstElementChild;
// // console.log(head1.nextElementSibling);

// // let head4 = div1.lastElementChild;
// // console.log(head4.previousElementSibling);
// // console.log(head4.previousSibling);


// //!dom direct access methods

// //getElementById
// // --> it will return the first element with the given id

// let h1 = document.getElementById("head1");
// console.log(h1);
// let btn = document.getElementById("btn1");
// console.log(btn);

// //getElementsByClassName
// // --> it will return all elements with the given class name

// let h4 = document.getElementsByClassName("h4");
// console.log(h4);
// let convertedArray = Array.from(h4);
// console.log(convertedArray);

// convertedArray.map((ele) => {
//     ele.style.color = "blue";
//     ele.style.backgroundColor = "skyblue";
//     ele.style.fontSize = "20px";
// });

// //getElementsByName
// // --> it will return all elements with the given name

// let btnname = document.getElementsByName("btn");
// console.log(btnname);

// let h11 = document.getElementsByTagName("h1");
// console.log(h11);

// //querySelector
// // --> it will return the first element with the given selector

// let h12 = document.querySelector(".h44");
// console.log(h12);

// let h13 = document.querySelectorAll(".h4");
// console.log(h13);

// !createElement
// let img1 = document.createElement("img");
// console.log(img1);
// img1.setAttribute("src", "download.jpg");
// img1.setAttribute("alt", "broken image");
// document.body.append(img1);

// let h1 = document.createElement("h1");
// h1.innerHTML = "javascript";
// document.body.append(h1);

// let p = document.createElement("p");
// p.textContent = "playwright";
// p.setAttribute("id", "p1");
// document.body.append(p);
// console.log(p);

// p.removeAttribute("id");
// console.log(p);
// document.body.removeChild(p);
// console.log(document.body);

// Event Handling

// inline handling
// let btn1 = document.getElementById("btn1");
//  function demo()(
// alert("button is clicked")
//  );

// another
//  let btn1 = document.getElementById("btn1");
//  btn1.onclick = function(){
//     alert("button is clicked");
//  };

//  //another way using arrow function
//  let btn3 = document.getElementById("btn1");
//  btn3.onclick = () => {
//     alert("button is clicked");
//  };

//addEventListener
let btn1 = document.getElementById("btn1");
let dark = false
btn1.addEventListener("click", () => {
    if (!dark) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        dark = true;
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        dark = false;
    }
})

var counterEl = document.getElementById("counter");
var incBtn = document.querySelector(".inc");
var decBtn = document.querySelector(".dec");
var resetBtn = document.querySelector(".reset");


var count = 0;


incBtn.addEventListener("click", function () {
    count = count + 1;
    counterEl.textContent = count;
});

decBtn.addEventListener("click", function () {
    count = count - 1;
    counterEl.textContent = count;
});

resetBtn.addEventListener("click", function () {
    count = 0;
    counterEl.textContent = count;
});

let table = document.createElement("table");
table.setAttribute("border", "2");
table.setAttribute("cellpadding", "50");
table.style.borderCollapse = "collapse";


for (let i = 1; i <= 5; i++) {
    let tr = document.createElement("tr");
    for (let j = 1; j <= 5; j++) {
        let td = document.createElement("td");
        tr.append(td);
    }
    table.append(tr);
}


document.body.append(table);

function add(a,b){
    return a+b;
}

console.log(typeof(add));