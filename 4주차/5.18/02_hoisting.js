// for (var i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 100);
// } // hoisting을 썼을 때의 문제점 10이 나올떄 까지 기다렸다가 연속 출력?
// hoisting되면서 closure(독립적인 값을 유지하는)현상이 나타나게 됨

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 100);
// } 

// for (var i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 100);
// } 

// 즉시 실행함수
//closure를 제거하기 위해 즉기 실행함수를 적용.
for (var i = 0; i < 10; i++) {
  (function(j){
    setTimeout(() => {
      console.log(j);
    }, 1000);  // for문의 값들을 다 받고 나서 1초 뒤에 실행됨 animate처럼 다 받아놓고 1000이 실행
  })(i)
} 

// 즉시 실행함수
// (function(){
//     setTimeout(() => {
//       console.log(i);
//     }, 100);
//   })()


//즉시 실행함수
// ((a,b)=>{})(i,j)//매개변수 적용 순서대로 매칭 i는 a에 j는 b에
  
