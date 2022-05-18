//최슨에 2022년~ spread operator가 복사, 연결등에 다방면으로 많이 사용
//배열
const arr1 = [1,2,3,4,5]; 
const arr2 = [...arr1, 6,7,8,9];//배열이 배열 안으로 //분해가 일어남 12345 X '1','2','3' ...
console.log(arr2);

//문자열
var str1 = 'hello world';
var str2 = [...str1];//문자열이 배열 안으로
console.log(str2);//hello world를 각각 분해 함'h', 'e', 'l', 'l','o', ' ', 'w', 'o','r', 'l', 'd'

const aa = {"name":"LGH","mobile":"010-3446-7374"}
const bb = {...aa, "key":1};//객체를 객체안으로 복사
console.log(bb);


const a = (b, ...rest)=>{ //묶음 :: 매개변수가 ...매개변수 -> 배열
  console.log(rest);
}
a(1,2,3);  //spread op가 입력값에 없고 매개변수에 있을 때,1이 b에 대입 2,3은 rest에 배열로 담김

const b =[1,2,3];
const a2 =function(a,b,c,d){
  console.log(a,b,c,d);
};
// a2(...b);
a2(1, ...b)   //spread op 있는 경우,1이 a에 들어가고 123이 b c d에 들어간다  -> 1123출력
//↑ 분해:: ...매개변수가 매개변수 -> 매개변수 
const a3 = [1,2,3,4,5]; // spread op없는 경우
const [head, ...rest] = a3; //배열
console.log(head, rest); 

//배열 복사
var arr3 = ['철수','영희'];// 배열이 배열로
var arr4 = [...arr3]; //array copy
 
//배열 병합
const x = [1,2,3]
const y = [4,5,6]
const xx = [7,8,9]
const z = [...x, ...y, ...xx];//2차원 배열이 안되고 요소들로 들어간다
const w = x.concat(y).concat(xx);//concat 합치다
const w1 = x.concat(y,xx); //21행과 같다
const w2 = x.concat(xx,y); //21행과 같다
console.log(z);
console.log(w);
console.log(w1);
console.log(w2);

//배열을 매개변수 분해
console.log(Math.max(...z));
console.log(Math.max(z));//nan이 나오는데 이는 ...x나 ...y가 객체인 상태이기 때문에 mathmax는 숫자만 비교해서 객체인 것을 비교 못하고 Nan이 나온단

const zz = [4,2,6,7,3,9]
console.log(Math.max(...zz)); //배열이 매개변수로!  실행 9

