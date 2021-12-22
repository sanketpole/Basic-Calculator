var num1input = document.getElementById('num1')
var num2input = document.getElementById('num2')
var operator = document.getElementById('operator')
var result= document.getElementById('result')

function calculate(){

  if(num1input.value==='' || num2input.value===''){
      alert('please make sure you have entered both operands')
      result.innerHTML('number not entered')
  }else{
    var num1 = parseInt(num1input.value)
    var num2 = parseInt(num2input.value)
    var op = operator.value

    if(op==='-'){
        result.value = num1-num2
    }else if(op==='*'){
        result.value = num1*num2
    }else if(op==='/'){
        result.value = num1/num2
    }else{
        result.value = num1+num2
    }
  }

 

}
// button.addEventListener('click', calculate)