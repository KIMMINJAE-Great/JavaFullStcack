const {map, filter, pip, values, go} = require('fxjs')
const L = require('fxjs')

const 친구들 = [
  {"name":"고길동", "do":"회사원"},
  {"name":"이길동", "do":"개발자"},
  {"name":"강길동", "do":"은행원"},
  {"name":"김길동", "do":"개발자"}
]
//1.배열의 함수를 통해서 구하는 방식(문제점 key와 value의 값이 변경되면 직접 수정해야함)
const t = 친구들.map(el => el.do === '개발자'?el:null).filter(el => el)
//2. fxjs를 통해서 구하는 방식(key와 value를 따로 지정해줄 필요가 없다. 매개변수만 변경)
const prop = key => obj => obj[key]//커링 지연,키도 받고 오브도 받아야만 넘김 
const propEqual = value => key => obj =>prop(key)(obj) === value//값도 키도 오브도 다 받아서 매개변수니 다 받는다는그그그

console.log(t);
//point free프로그래밍 매개변수만을 바꿔서 로직을 유연하게 수정할 수 있는 Point-free프로그래밍
const t2 = go(
  친구들,
  L.filter(propEqual('개발자')('do')),
  L.takeAll
  )
  console.log(t2);
