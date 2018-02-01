let clickTime, createdTime;



let box = document.getElementById('box');
let reaction = document.getElementById('reaction');


box.addEventListener('click', function (e) {
    clickTime = Date.now();
    let reactionTime = (clickTime - createdTime) / 1000;
    this.style.display = 'none';
    reaction.innerHTML = `${reactionTime} seconds`;
    makeBox();
});

makeBox();

function makeBox() {
    let timeout = Math.floor(Math.random() * 5000);
    let dimension = Math.floor(Math.random() * 250) + 20;
    let top = Math.floor(Math.random() * 500);
    let left = Math.floor(Math.random() * 500);
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let rgb = "rgb(" + red + ", " + green + ", " + blue + ")";
    let radiusTrue = Math.floor(Math.random() * 10);
    console.log(radiusTrue);
    console.log(top, left);

    setTimeout(function () {
        box.style.display = "block";
        box.style.borderRadius = 0
        box.style.height = dimension + "px";
        box.style.width = box.style.height;
        box.style.top = top + "px";
        box.style.left = left + "px";
        box.style.backgroundColor = rgb;
        if (radiusTrue > 5) {
            box.style.borderRadius = "100%"
        }
        createdTime = Date.now();
    }, timeout);
}