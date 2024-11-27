function answer() {
    let str = document.getElementById('str').value;
    console.log(str);
    let length = str.length;
    console.log(length);
    let result = document.getElementById('result');
    result.innerHTML = "Length of " + "'" + str + "'" + " is: " + length;
    console.log(result); 
} 