// SIMPLE CALCULATOR 

console.log(`'1' for Addition`);
console.log(`'2' for Subraction`);
console.log(`'3' for Multiplication`);
console.log(`'4' for Division`);
console.log(`'5' for Modulus`);
console.log("");

let a = Number(prompt("Enter the Number 1: "));
console.log(a);
let b = Number(prompt("Enter the Number 2: "));
console.log(b);
let c = Number(prompt("Enter the Operator Number: "));

if(c==1) {
    console.log("You choosing the Addition Operator: ");
    console.log(`Answer is: ${a + b}`);
}

else if(c==2) {
    console.log("You choosing the Subraction Operator: ");
    console.log(`Answer is: ${a - b}`);
}

else if(c==3) {
    console.log("You choosing the Multiplication Operator: ");
    console.log(`Answer is: ${a * b}`);
}

else if(b==0 && c==4) {
    console.log("Cannot divide by zero. ");
}

else if(c==4) {
    console.log("You choosing the Division Operator: ");
    console.log(`Answer is: ${a / b}`);
}

else if(b==0 && c==5) {
    console.log("Invalid format used. ");
}

else if(c==5) {
    console.log("You choosing the Modulus Operator: ");
    console.log(`Answer is: ${a % b}`);
}

else {
    console.log("Give the correct Operator Number!");
} 