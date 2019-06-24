// Your code here
var dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px","");
  let left = parseInt(leftNumbers, 10);
    if (left > 0){
        dodger.style.left = `${left+1}px`;
    }
}

document.addEventListener("keydown", function(e) {
  console.log(e.key);
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
