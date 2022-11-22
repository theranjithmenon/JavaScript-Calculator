var firstNum = "";
var result = "";
var operator = "";

function makeNum(num) {
    if(document.getElementById("ans").innerHTML.toString != 0){
        firstNum = firstNum + num;
    }
    document.getElementById("ans").innerHTML = result + operator + firstNum;
}

function allClear(){
    firstNum = "";
    result = "";
    operator = "";
    document.getElementById("ans").innerHTML = "0";
}

function ope(operatorPassed){
    operator = operatorPassed;
    result = firstNum;
    firstNum = "";
    document.getElementById("ans").innerHTML = result + operator;
}

function calculate(){
    switch (operator){
        case '+' : result = parseInt(result) + parseInt(firstNum) ; break;
        case '-' : result = parseInt(result) - parseInt(firstNum) ; break;
        case '*' : result = parseInt(result) * parseInt(firstNum) ; break;
        case '/' : result = parseInt(result) / parseInt(firstNum) ; break;
    }
    document.getElementById("ans").innerHTML = result;
}