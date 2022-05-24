const obj = {
  "이름" : "큰돌", 
  "나이" : 27,
  "나이2" : undefined
}
// console.log(obj.이름) //큰돌
var prop = ["이름", "나이", "나이2"]
for(let i=0;i<Object.keys(obj).length;i++){
  console.log(obj[prop[i]]);
}
for(let key in Object.keys(obj)){
  console.log(`${key} : ${obj[key]}`); //obj.key로 불러오면 undefined만 뜸
}
for(let item in Object.values(obj)){
  console.log(`value : ${item}`); 
}
for(let entry of Object.entries(obj)){
  console.log(entry[0]+":"+entry[1]); 
}



const _name = "이름"
// console.log(obj[_name]) //큰돌
// console.log(obj['이름']) //큰돌
// console.log(obj['나이2']) // undefined 직렬화가 되지 않으므로 권장하지 않습니다.
// console.log(Object.keys(obj)) // key값을 뽑아 낼 수 있습니다.


