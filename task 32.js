function names() {
    let first = document.getElementById('fname').value;
    console.log(first);
    let second = document.getElementById('lname').value;
    console.log(second);
    let result = document.getElementById('result');
    result.innerHTML = "Full Name : " + first + " " + second;
    console.log(result); 
} 