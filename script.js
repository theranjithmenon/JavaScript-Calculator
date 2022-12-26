var firstNum = "";
var secondNum = "";
var result = "";
var operator = "";

function makeNum(num) {
    if(document.getElementById("ans").innerHTML.toString != 0){
        firstNum = firstNum + num;
    }
    if(operator != ""){
        document.getElementById("opeText").innerHTML = secondNum + operator;
    }
    document.getElementById("ans").innerHTML = firstNum;
}

function allClear(){
    firstNum = "";
    secondNum ="";
    result = "";
    operator = "";
    document.getElementById("ans").innerHTML = "0";
    document.getElementById("opeText").innerHTML = "0";

}

function ope(operatorPassed){
    operator = operatorPassed;
    secondNum = firstNum;
    firstNum = "";
    document.getElementById("ans").innerHTML = operator;
    document.getElementById("opeText").innerHTML = secondNum;
}

function calculate(){
    switch (operator){
        case '+' : result = parseInt(secondNum) + parseInt(firstNum) ; break;
        case '-' : result = parseInt(secondNum) - parseInt(firstNum) ; break;
        case '*' : result = parseInt(secondNum) * parseInt(firstNum) ; break;
        case '/' : result = parseInt(secondNum) / parseInt(firstNum) ; break;
    }
    document.getElementById("opeText").innerHTML = secondNum + operator + firstNum;
    document.getElementById("ans").innerHTML = result;
    firstNum = result;
}