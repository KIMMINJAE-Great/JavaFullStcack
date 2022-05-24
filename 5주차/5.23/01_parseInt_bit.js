// for (let i = 0; i < 100000; i++) { //10만번은 성능체크용 반복횟수
//   let a = 123.456789;
//   b = parseInt(a);
// }
// let a = 123.456789; //123

let a = 123.956789;  //123
// b = parseInt(a); //Int는 소수점 후 수를 제거
b = ~~(a);  //parsInt처럼 실수를 정수형으로
console.log(b);
// 비트연산자가 paeseInt보다 빠르다