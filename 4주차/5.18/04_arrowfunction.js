a();
b();
function a(){
  console.log("a");
}
//상기동일 방식
const b=()=>{  //익명 함수 var도 안됨
  console.log("b");  
}

//화살표 함수의 매개변수가 1개일 때 ()는 생략가능, 나머지 생략불가
//화살표 함수의 return 또는 명령문이 1개 일 때중괄호와 return을 생략가능