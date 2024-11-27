function answer() {
    let num = document.getElementById('num').value;
    console.log(num);
    let root = Math.sqrt(num);
    console.log(root);
    let result = document.getElementById('result');
    result.innerHTML = "Square Root: " + root;
    console.log(result); 
} 