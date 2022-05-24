let origin = [1,2,3,4,5];
let copy = [];
for(let i = 0; i<origin.length; i++){
  copy.push(origin[i])
}
// copy =[...origin]  //call by value 출력할 때 변수가 각각 다름
copy = origin   //call by assignment  출력할 때 변수가 같이 변경
origin[0] = 10;  //copy에 origin을 위에서 이미 대입했지만 copy의 0이 바껴져 있다
console.log(copy);//console.log(copy.toString());

const a = {"b":1}//리터럴객체
let b = {...a}//spread op는 배열뿐만 아니라 객체도 복사,배열을 spread없이 복사 하려면 for문을 돌려 하나하나가 넣어야한다
console.log(b);
let c = Object.assign({},a)
c.b = 3;
b.b = 3;
// console.log(a);
console.log(a.b); //call by value 형식

const aa ={
  "b" : 1,
  "c" : {"d":2}
}
let bb = {...aa}
let cc = Object.assign({}, aa)
cc.c.d = 100;
console.log(aa);