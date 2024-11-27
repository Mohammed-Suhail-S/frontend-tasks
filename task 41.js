function result() {

    let detail = document.querySelector('#phone');
    const res = detail.options[phone.selectedIndex].value;
    console.log(res);

    let Name = "";
    let Processor = "";
    let Ram = "";
    let Storage = "";
    let Battery = "";

    switch(res) {

        case "samsung": 
            Name = "Samsung Galaxy S23 Ultra";
            Processor = "Snapdragon 8 Gen 2";
            Ram = "12gb";
            Storage = "256gb";
            Battery = "5000mAh";
            break;

        case "iphone": 
            Name = "iPhone 14 Pro Max";
            Processor = "Apple A16 Bionic";
            Ram = "6gb";
            Storage = "128gb";
            Battery = "4323mAh";
            break;

        case "google_pixel": 
            Name = "Google Pixel 7 Pro";
            Processor = "Google Tensor G2";
            Ram = "12gb";
            Storage = "512gb";
            Battery = "5000mAh";
            break;

        case "oneplus": 
            Name = "One Plus 11";
            Processor = "Snapdragon 8 Gen 2";
            Ram = "8gb";
            Storage = "128gb";
            Battery = "5000mAh";
            break;

        case "xiaomi": 
            Name = "Xiaomi 13 Pro";
            Processor = "Snapdragon 8 Gen 2";
            Ram = "12gb";
            Storage = "256gb";
            Battery = "4820mAh";
            break;

    } 

    let check = `Name: ${Name}; Processor: ${Processor}; Ram: ${Ram}; Storage: ${Storage}; Battery: ${Battery}; `
    document.getElementById('result').innerHTML = check;
    console.log(check);

} 
