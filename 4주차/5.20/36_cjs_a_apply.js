const {odd, even} = require('./36_cjs_a')
const checkOddOrEven = require('./36_cjs_a_Func')

function checkStringOddOrEven(str){
  return (str.length%2)?odd:even;
}
console.log(checkOddOrEven(10));
console.log(checkStringOddOrEven('hello javascript'));