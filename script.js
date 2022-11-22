var firstNum = "";
var result = "";
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
    document.getElementById("text").innerHTML = operator;

}

function calculate(){
    switch (operator){
        case '+' : result = parseInt(result) + parseInt(firstNum) ; break;
        case '-' : result = parseInt(result) - parseInt(firstNum) ; break;
        case '*' : result = parseInt(result) * parseInt(firstNum) ; break;
        case '/' : result = parseInt(result) / parseInt(firstNum) ; break;
    }
    document.getElementById("text").innerHTML = result;
}