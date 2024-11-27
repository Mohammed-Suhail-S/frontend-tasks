function result() {
    let num = document.getElementById('number').value;
    console.log(num);

    if(num<=3 && num>=1) {
        let result = document.getElementById('result');
        result.innerHTML = "The Month of Interest is 2%.";
    }

    else if(num<=6 && num>=4) {
        let result = document.getElementById('result');
        result.innerHTML = "The Month of Interest is 4%.";
    }

    else if(num<=9 && num>=7) {
        let result = document.getElementById('result');
        result.innerHTML = "The Month of Interest is 6%.";
    }

    else if(num<=12 && num>=10) {
        let result = document.getElementById('result');
        result.innerHTML = "The Month of Interest is 8%.";
    }

    else {
        let result = document.getElementById('result');
        result.innerHTML = "Please enter the correct month number !";
    }

} 