const R = require('ramda')
const {map, filter, pipe} = require('fxjs')

//일반적인 함수 합성
const f_1 = R.map(a => a+1)
const f_2 = R.filter(a => a%2)//홀수만 filtering
const result = f_2(f_1([1,2,3,4]))//그냥 함수를 합쳐서 연산
console.log(result);

//ramda를 이용한 함수 합성
console.log(R.compose(Math.abs, R.add(1), R.multiply(2))(-4));//7 ,뒤에서부터 연산  ramda를 이용한 합성함수
console.log(R.pipe(R.negate, R.inc)(3));//앞에서부터 연산

//Composition Function with fxjs
const f_pipe = pipe(
  map(a => a+1), filter(a => a%2)
)//2,3,4,5에서 홀수만 가져오우
console.log(f_pipe([1,2,3,4]));
