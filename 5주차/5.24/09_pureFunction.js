const b =1;
const pure = function(a,b){
  return a+b;  //매개변수 만으로 return
}

const not_pure = function(a){
  return a+b;
}

console.log(pure(1,1));//퓨어는 실행 후에 a와b의 메모리가 사라지기떄문에 좋다
console.log(not_pure(3));//전역 변수를 사용하기 때문에 메모리를 계속 잡아먹는다

let c = 0;
//나쁜 예 : 매개변수로 받지도 않고 전역변수를 변환하고 반환한다.
const bad_f = () => {
  return c++;
}
bad_f()
console.log(c);//1

//좋은 예 : 매개변수로 받아 +1을 한다.
const f = c=> c+1;
//전역변수의 값만 가져와서 매개변수로 쓰이면 지역변수C는 변화가 안생겨 좋다