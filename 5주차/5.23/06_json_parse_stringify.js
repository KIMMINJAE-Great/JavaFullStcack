const a = {
  'b' :  1,
  'c' : {'b':2}
}
const str = JSON.stringify(a);
// console.log(str.a.c.d); str이 리터럴이 아니라서 접근이 안됨, str은 문자열
console.log(str);
let b = JSON.parse(str);
b.c.d = 4;
console.log(a);
console.log(a.c.d);//a는 리터럴 객체가 접근 가능,리터럴 오브젝트는 a.name 가능

//문자열과 JSON오브젝트는 다르다
