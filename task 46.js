// ARRAY OF OBJECT

let id = [{name: "Suhail" , age: 23},
        {name: "Ajeem", age: 24},
        {name: "Arjun", age: 25}];

console.log(id);

let id2 = [{name: "Suhail" , age: 23},
        {name: "Ajeem", age: 24},
        {name: "Arjun", age: 25}];

let obj = id2.map(x => x.age = x.age + 5);
console.log(id2);
