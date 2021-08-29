
function expressionCalculator(expr) {
    let str = expr;
    let rez,sum;
    let countOpen = 0, countClose = 0;
    let bracketOpen='(';
    let bracketClose=')';
   
  //--------------------------------------------------Провека строки на скобки
   function checkBracket(str) {
     for (let i = 0; i < str.length; i++) {
       bracketOpen === str[i] ? countOpen++ : false;
       if (bracketClose === str[i]) {
        countClose++;
         if (countOpen - countClose < 0) {
  
           return false
         }
       }
     }
     if (countOpen - countClose !== 0) {
      return false
     }
     return true
   }
  
   let ch = checkBracket(str);
  //  console.log(`Проверка на правильность скобок = ${ch}`);
    if (ch === false) {
        throw new Error('ExpressionError: Brackets must be paired');
    //   return (throw new Error('something went wrong'))
    }
      
    function arifmeticsStr(str) {
        str=String(str);
        let err = str.indexOf('/ 0');
        if (err !== -1) {
          throw new Error("TypeError: Division by zero.");
        } else {
          subStr=eval(str);
          return subStr;
        } 
      }
    
    
   return arifmeticsStr(str);
}

module.exports = {
    expressionCalculator
}