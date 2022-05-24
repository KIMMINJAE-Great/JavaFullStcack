const R = require('ramda')

//ramda미 적용할 경우
const non_currying = (a,b,c) =>  a+b+c
console.log(non_currying(1,2));//NaN not a number

//currying은 갖춰져야 실행, 연산을 지연시키는 효과
//npm node package manager

const a = R.add(1)
console.log("인수가 다 채워지기 전 : "+a);
const b = a(2)
console.log(b);

const c = R.add(1)(1);
console.log(c);

//ramda를 이용한 custom currying
const addFourNumbers = (a,b,c,d) =>  a+b+c+d

const curriedAddFourNumbers = R.curry(addFourNumbers)//람다가 적용된 커리
const f = curriedAddFourNumbers(1,2)
const g = f(3)
console.log(`ramda를 적용하여 계산한 결과 :${g(4)}`);

//ramda를 이용한 currying의 장점:지연효과, 단점 : 코드가 지저분하다