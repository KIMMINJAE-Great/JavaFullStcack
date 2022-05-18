var arr = [1,2,3,4,5];
var maxCallback = function(a, b){
  return Math.max(a,b);
}
// const result = arr.reduce(maxCallback);
const result = arr.reduce((a,b)=>{return Math.max(a,b)})  //a는acc b는 cur
console.log(result);

var arr2 = ['a','b','C','D','e'];  // 아스키코드 사용예제
const result2 = arr2.reduce((a,b) => {return Math.min(a, b.charCodeAt(0))},1000)
console.log(String.fromCharCode(result2));

//{}안에 있으면 객체object
const result3 =[{x:22}, {x:42}].reduce((acc, cur)=>{
  return Math.max(max.x, cur.x);
});
console.log(result3);  //42빠셍
