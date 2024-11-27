function result() {
    let word = document.getElementById('word').value;
    console.log(word);
    let rev = word.split('').reverse().join('');
    console.log(rev); 

    if(word==rev) {
        let result = document.getElementById('result');
        result.innerHTML = "It is a Palindrome";
    }

    else {
        let result = document.getElementById('result');
        result.innerHTML = "It is not a Palindrome";
    }
} 