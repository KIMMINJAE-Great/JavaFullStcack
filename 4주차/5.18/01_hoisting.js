// function print(){
  
//   for(i=0; i<10; i++){

//     console.log(i);
//   }
// } 
// console.log(print());

function b(){
  // var은 선언과 초기화가 동시에 실행 (함수scope) 초기화가 동시에 되서 위로 올라온다? 그래서 호이스팅가능
  // let 선언과 초기화가 TDZ에 분리(블록 scope)  즉 블록 영역내에서만 사용이 가능 지역 변수처럼
  for(var i = 0; i< 10; i++){         //hoisting됨

  }
  return i;
}
console.log(b());
// function b(){          
//   for(let i = 0; i< 10; i++){         //hoisting안됨

//   }
//   return i;
// }
// console.log(b());