var firstNum = "";
var result = "";
var operator = "";

function makeNum(num) {
    if(document.getElementById("text").innerHTML.toString != 0){
        firstNum = firstNum + num;
    }
    document.getElementById("text").innerHTML = firstNum;
}

function clear(){
    
}