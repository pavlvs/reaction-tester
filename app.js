let box = document.getElementById('box');


box.addEventListener('click', function (e) {
    this.style.display = 'none';
    makeBox();
});

makeBox();

function makeBox() {
    let timeout = Math.floor(Math.random() * 5000);
    setTimeout(function() {
      box.style.display = "block";
      console.log("foo");
    }, timeout);
}