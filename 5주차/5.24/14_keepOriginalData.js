const a = [1,2,3,4]
const c = [8,9]// 배열
// const c = {"d":1} //리터럴 객체
a.push(c)
let b = a.slice()//비파괴적인, 얕은 복사
b[0] = 10;
b[1] = 20
console.log(b);//1차원 깊이 1 a에 변화 없음
b[4][1]= 200;// 깊이 2부터는 a나b의 값을 바꾸면 영향이 생김
// a[4][1] = 100//b[4][1]도 100으로 바뀜
// a[4].d = 100
//console.log(a,c);
console.log(a,b);//shallow 카피라 b의 인덱스4의 값도 d:1이됨 뎁스1
//깊이 1 1차원배열 깊이 2 2차원배열



// b = a.splice(1)//a의 원본이 바뀜 파괴적인
// console.log(a,b);

// const aa = [0,1,2,3,4,5,6]
// let bb = aa.splice(5)//삭제된 값이 bb로 들어간다
// console.log(bb);
