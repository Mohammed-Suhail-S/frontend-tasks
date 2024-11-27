function result() {
    let num = document.getElementById('num').value;
    console.log(num);
    
    if(num >= 0 && num <= 49) {
        let result = document.getElementById('result');
        result.innerHTML = num + " is less than 50.";

        if(num == 0) {
            let res = document.getElementById('result');
            res.innerHTML = result.innerHTML + " " + num + " is equal to 0. ";
        }

        else if(num >= 1 && num <= 10) {
            let res = document.getElementById('result');
            res.innerHTML = result.innerHTML + " " + num + " is between 1 to 10. ";
        }

        else if(num >= 11 && num <= 20) {
            let res = document.getElementById('result');
            res.innerHTML = result.innerHTML + " " + num + " is between 11 to 20. ";
        }

        else if(num >= 21 && num <= 30) {
            let res = document.getElementById('result');
            res.innerHTML = result.innerHTML + " " + num + " is between 21 to 30. ";
        }

        else if(num >= 31 && num <= 40) {
            let res = document.getElementById('result');
            res.innerHTML = result.innerHTML + " " + num + " is between 31 to 40. ";
        }

        else if(num >= 41 && num <= 49) {
            let res = document.getElementById('result');
            res.innerHTML = result.innerHTML + " " + num + " is between 41 to 50. ";
        }

    }

    else if(num >= 50 && num <= 100) {
        let result = document.getElementById('result');
        result.innerHTML = num + " is greater than 50.";

        if(num == 50) {
            let res = document.getElementById('result');
            res.innerHTML = num + " is less than 100. " + num + " is between 41 to 50. ";
        }

        else if(num >= 51 && num <= 60) {
            let res = document.getElementById('result');
            res.innerHTML = result.innerHTML + " " + num + " is between 51 to 60. ";
        }

        else if(num >= 61 && num <= 70) {
            let res = document.getElementById('result');
            res.innerHTML = result.innerHTML + " " + num + " is between 61 to 70. ";
        }

        else if(num >= 71 && num <= 80) {
            let res = document.getElementById('result');
            res.innerHTML = result.innerHTML + " " + num + " is between 71 to 80. ";
        }

        else if(num >= 81 && num <= 90) {
            let res = document.getElementById('result');
            res.innerHTML = result.innerHTML + " " + num + " is between 81 to 90. ";
        }

        else if(num >= 91 && num <= 100) {
            let res = document.getElementById('result');
            res.innerHTML = result.innerHTML + " " + num + " is between 91 to 100. ";
        }

    }

    else {
        let result = document.getElementById('result');
        result.innerHTML = num + " is greater than 100.";
    }

}  