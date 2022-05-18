//swap
let a = 2;
let b = 5;
console.log(`${a} / ${b}`);  

//일반적 변수 교차
let tmp = a;
a = b;
b = tmp;
console.log(`${a} / ${b}`);  

//간단 변수 교차
[a,b] = [b,a];
console.log(`${a} / ${b}`);

//배열 복사
const d =function(){
  return [1,2,3,4];
};
const [x,y,z] = d();//4는 할당이 안됨
console.log(x,y,z);

// const f = () =>{ 
//   return {"name":"KMJ", "job":"programmer"};
// }; 
const f =()=>({"name":"KMJ", "job":"programmer"});//리터럴 객체 리턴시 ()필수
const {name} = f;
console.log(name);

var candyMachine={
  status : {name: 'node',count:5},
  getCandy : function(){
    this.status.count--;  //this.status.count--하면 함수안의this이기에 window를 가리킨다
    return this.status.count;//candyMachine.status.count;
  }
}

// var getCandy = candyMachine.getCandy();  //생성자로 불려오면? this가 candyMachine을 가리키게 된다. getCandy에 머신의 객체들을 할당시켜 
// var count = candyMachine.status.count;
const {getCandy, status:{count}} = candyMachine;
console.log(getCandy);
console.log(count);