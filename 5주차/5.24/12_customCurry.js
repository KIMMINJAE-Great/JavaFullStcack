// const curry = function (fn) {
//   return function (a) {
//     return function (b) {
//       return fn(a, b);
//     };
//   };
// };

const custom_curry = fn => a => b => fn(a,b)//사용자가 직접 만든 커리함수

// const f1 = curry((a,b)=>a + b)
const f1 = custom_curry(function(a,b){
  return a+b;
})
const f2 = f1(1)
console.log(f2);
const result = f2(1)
console.log(result);