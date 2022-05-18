const arr = [5,192,8,130,44];
const found = arr.find(function(el){
  return el > 10 ;  // 10보다 큰것 중에 제일 가까운거(index순서상)를 출력
})
console.log(found);

const 조건 = e =>e.height>=180
const 친구들 =[
  {"name" : "박종선", "height":173},
  {"name" : "연제호", "height":175},
  {"name" : "윤성용", "height":180},
  {"name" : "최주원", "height":190}
]

const 키큰친구 = 친구들.find(조건)
console.log(키큰친구); //{"name" : "윤성용", "height":180}
const 키큰친구인덱스 = 친구들.findIndex(조건); //못 찾으면 -1return
const tallestFreind = 친구들.indexOf(조건)
console.log(키큰친구인덱스);
console.log(키큰친구인덱스); //2