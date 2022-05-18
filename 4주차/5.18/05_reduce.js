var total = 0;
var arr = new Array(1,2,3,4,5,6,7,8,9,10);
for (let i = 0; i < arr.length; i++) {
  total += arr[i];
}
console.log(total);
//cur이 배열을 돌리는 차례대로 나오는 거 1 2 3 4 이렇게 그거를 acc에 더한 값으로 저장
//acc는 누적 cur은 현재값(더해질값) idx 현재 인덱스,색인  init는 acc의 초기값 안주면 배열의 0번째 값이 됨 
var init = 100;
total = arr.reduce((acc,cur,idx)=>{
return acc += cur;
},init);//<- init은 acc의 초기값을 지정 100도 가능 acc배열에서 하나씩 꺼냄  cur현재  배열의 값을 뭉쳐서 하나의 값을 return할 떄 사용
console.log(total);