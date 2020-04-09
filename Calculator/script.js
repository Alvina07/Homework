let calculatorHistoryNew='';
let displayAnswerNew;
let add;
let subtract;
let divide;
let multiply;
let secondNumber;
let finalResult;
let calculatorHistory=document.querySelector('#calculatorHistory');
let displayAnswer=document.querySelector('#displayAnswer');
let mathOperatorAdd=document.querySelector('#add');
let mathOperatorSubtract=document.querySelector('#subtract');
let mathOperatorMultiply=document.querySelector('#multiply');
let mathOperatorDivide=document.querySelector('#divide');
let number1=document.querySelector('#number_1');
let number2=document.querySelector('#number_2');
let number3=document.querySelector('#number_3');
let number4=document.querySelector('#number_4');
let number5=document.querySelector('#number_5');
let number6=document.querySelector('#number_6');
let number7=document.querySelector('#number_7');
let number8=document.querySelector('#number_8');
let number9=document.querySelector('#number_9');
let number0=document.querySelector('#number_0');
let clear=document.querySelector('#delete');
let equalsKey=document.querySelector('#equals');

number1.addEventListener('click', function(){
    displayAnswer.value += '1';
  });
  number2.addEventListener('click', function(){
    displayAnswer.value += '2';
  });
  number3.addEventListener('click', function(){
    displayAnswer.value += '3';
  });
  number4.addEventListener('click', function(){
    displayAnswer.value += '4';
  });
  number5.addEventListener('click', function(){
    displayAnswer.value += '5';
  });
  number6.addEventListener('click', function(){
    displayAnswer.value += '6';
  });
  number7.addEventListener('click', function(){
    displayAnswer.value += '7';
  });
  number8.addEventListener('click', function(){
    displayAnswer.value += '8';
  });
  number9.addEventListener('click', function(){
    displayAnswer.value += '9';
  });

  number0.addEventListener('click', function(){
    displayAnswer.value += '0';
  });

  mathOperatorAdd.addEventListener('click', function() {
    add=+displayAnswer.value;
    displayAnswer.value=' ';
    subtract=null;
    multiply=null;
    divide=null;
  });

   mathOperatorSubtract.addEventListener('click', function() {
    subtract=+displayAnswer.value;
    displayAnswer.value='';
    add=null;
    multiply=null;
    divide=null;
    });
    
    mathOperatorMultiply.addEventListener('click', function() {
    multiply=+displayAnswer.value;
    displayAnswer.value='';
    add=null;
    subtract=null;
    divide=null;
    });

    mathOperatorDivide.addEventListener('click', function() {
    divide=+displayAnswer.value;
    displayAnswer.value='';
    add=null;
    subtract=null;
    multiply=null;
    });

    clear.addEventListener('click', function(){
        displayAnswer.value = '';
      });

    
    equalsKey.addEventListener('click', function() {
    secondNumber =+displayAnswer.value;  
    if (add!==null) {
        finalResult=secondNumber+add;
        calculatorHistoryNew+=`${add} + ${secondNumber} = ${finalResult},`;
    }
    else if (subtract!==null) {
        finalResult=subtract-secondNumber;
        calculatorHistoryNew+=`${subtract} - ${secondNumber} = ${finalResult},`;
    }
    else if(multiply!==null) {
        finalResult=secondNumber*multiply;
        calculatorHistoryNew+=`${multiply} * ${secondNumber} = ${finalResult},`;
    }
    else {
        finalResult=divide/secondNumber;
        calculatorHistoryNew+=`${divide} / ${secondNumber} = ${finalResult},`;
    }
    displayAnswer.value=finalResult;
    calculatorHistory.value=calculatorHistoryNew;
    });
