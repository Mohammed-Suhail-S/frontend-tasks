let a = Number(prompt("Enter the Number: "));
console.log(a);
let b = 3;
console.log(b);
let cube = a**3;
console.log(cube);

function result() {
    let total = document.getElementById("h1")
    total.innerHTML = cube;

    total = document.getElementById("p")
    total.innerHTML = "Working Method Example: 2 => 2*2*2 => 8";
} 