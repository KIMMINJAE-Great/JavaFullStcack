const numbers = [1,3,5,4];
const isAllOdd = numbers.every(e => e%2);// 모든 조건을 만족해야 true
const isSomeOdd = numbers.some(e => e%2);//하나의 조건만 만족하면 true
console.log(isAllOdd, isSomeOdd); //false, true
///\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
 const count = numbers.reduce((acc,cur)=>{
   if(cur%2==1){
     acc++;
   }
   return acc;
 })
 console.log(count);
///\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
 const count1 = numbers.reduce((acc,cur)=>{
  
  return acc += cur%2==1
 });
 console.log(count1);
///\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
 const result = numbers.reduce((acc, cur)=>{return acc +=(cur%2)?1:0})
 console.log(result);

// const isBelowItems = cur => cur<40;   //익명함수
const isBelowItems = function(c){c<40};

const arr = [1,30,39,29,10,13];
console.log(arr.every(isBelowItems));

const arr2 = ['h','e','l','l','o'];
const isFind = function(arr, val){
  return arr.some(
    function (cur){
      return cur ==val  
    }
  )
}
console.log("결과 : " + isFind(arr2, 'e'));  //e가 val로 넘어감

var fruits = ['apple','banana','mango','guava'];
function checkAvailability(arr, val){
  return arr.some(function(arrVal){
    return val === arrVal;
  });
}

console.log(checkAvailability(fruits, 'kela')); //false
checkAvailability(fruits, 'banana') //true