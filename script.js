var firstNum = 0;
var result = 0;
var operator = "";

function makeNum(num) {
    if(document.getElementById("text").innerHTML.toString != 0){
        firstNum = firstNum + num;
    }
    document.getElementById("text").innerHTML = firstNum;
}

function allClear(){
    firstNum = "";
    result = "";
    operator = "";
    document.getElementById("text").innerHTML = "0";
}

function ope(operatorPassed){
    operator = operatorPassed;
    result = firstNum;
    firstNum = "";
    document.getElementById("text").innerHTML = "0";

}

function calculate(){
    switch (operator){
        case '+' : result = result + firstNum ; break;
        case '-' : result = result - firstNum ; break;
        case '*' : result = result * firstNum ; break;
        case '/' : result = result / firstNum ; break;
    }
    document.getElementById("text").innerHTML = result;
}