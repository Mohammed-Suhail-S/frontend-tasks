// TASK 1: INCREASE AND DECREASE 

let sum = 0;

function plus() {
    let add = document.getElementById('change');
    add.innerHTML = ++sum;   
} 

function minus() {
    let sub = document.getElementById('change');
    sub.innerHTML = --sum;  
} 

// TASK 2: CHANGE THE VALUE FROM LOWERCASE TO UPPERCASE 

let code = ["html","css","bootstrap","javascript"];
console.log(code);

let val = code.join().toUpperCase().split(',');
console.log(val);

// TASK 3: REDUCE THE LETTERS 

function recursive(str) {
    console.log(str);
    if(str.length == 0) {
        return str;
    }
    return recursive(str.slice(0,-1));
} 

console.log(recursive("Javascript")); 

// TASK 3: MY METHOD 

let arr = ['Javascript'];
let b = arr.join();
console.log(b)
b = arr.join().slice(0,-1);
console.log(b)
b = arr.join().slice(0,-2);
console.log(b) 
b = arr.join().slice(0,-3);
console.log(b)
b = arr.join().slice(0,-4);
console.log(b)
b = arr.join().slice(0,-5);
console.log(b)
b = arr.join().slice(0,-6);
console.log(b)
b = arr.join().slice(0,-7);
console.log(b)
b = arr.join().slice(0,-8);
console.log(b)
b = arr.join().slice(0,-9);
console.log(b) 
