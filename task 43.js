// Image Flipper 

const photo = ["lion.jpg","tiger.jpeg","bear.jpg","cheetah.jpg","elephant.jpg","giraffe.jpg"];

function change() {
    let random = Math.floor(Math.random()*photo.length);
    console.log(photo[random]);
    return photo[random];
}

function action() {
    let repeat = document.getElementById('image');
    repeat.style.background = `url(./images/${change()})`;
    repeat.style.backgroundSize = `cover`;
} 