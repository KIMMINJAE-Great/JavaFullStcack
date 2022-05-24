//javascript가 일급객체(first-class Object/객체가 연산을 지원)이기 때문.
//고차함수들 ::함수가 다른 함수를 매개변수로 받아서 어떤 로직을 생성하는 함수
const a = (a) => {
  return a+10;
}
//특정 함수등으로 어떤 값을 받아 새로운 값을 반환하는 것을 Monad Function
const b = [1,2,3].map(a)//매개변수가 콜백함수
console.log(b);//11,12,13

const _call = (a,b)=> { //콜백함수가 내부에서 실행됨
  return a() + b()
}

// console.log(_call(function(){return 10},function(){return 20}));
console.log(_call(()=>10, function(){return 20}));

// const aa = function(val){
//   return function(){return val}
// }
const aa = val => () => val//함수를 반환하는 함수
console.log(aa(100));
aa(100)
a_lazy = aa(100)
console.log(a_lazy());