var countElement1 = document.querySelector("#nine");
var countElement12 = document.querySelector("#twelve");
var countElement = document.querySelector("#nineNine");
var addOne = 9;
var countUp = 12;
var countNine = 9;

function counter(){
    addOne ++;
    countElement1.innerText = addOne + " like(s)";
    
}

function count(){
    countUp ++;
    countElement12.innerText = countUp + " like(s)";
}
function countup(){
    countNine ++;
    countElement.innerText= countNine + " like(s)";
}

