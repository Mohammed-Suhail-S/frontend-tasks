function result() {
    let num = document.getElementById('num').value;
    console.log(num);
    
    if(num%2==0) {
        let result = document.getElementById('result');
        result.innerHTML = num + " is Even Number.";
    }

    else {
        let result = document.getElementById('result');
        result.innerHTML = num + " is Odd Number.";
    }
} 