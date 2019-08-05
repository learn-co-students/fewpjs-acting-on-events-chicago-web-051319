// Your code here
const dodger = document.getElementById('dodger');
dodger.style.backgroundColor = '#FF69B4'


function moveDodgerLeft(){
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);
 
    dodger.style.left = `${left - 1}px`;
}

function moveDodgerRight(){
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);
 
    dodger.style.left = `${left + 1}px`;
}

document.addEventListener('keypress' , function(e){
    if(e.key == "ArrowLeft")
        moveDodgerLeft()
    else if(e.key = "ArrowRight")
        moveDodgerRight()
})