let a = [1,2,3,4,5,6,7,8,9,11,22,33,44,55,66,77,88,99,100];
console.log(a);

a.splice(2,1,'3.0');
a.splice(4,1,'5.0');
a.splice(6,1,'7.0');
console.log(a);

a.unshift(0);
console.log(a);

a.push(1000);
console.log(a);

console.log("Middle Value is: " + Number(a[a.length-11]));

a.splice(10,0,10);
console.log(a); 