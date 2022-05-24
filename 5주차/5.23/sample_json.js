const obj= {
"이름":"큰돌",
"나이":27,
"나이2":undefined
}
console.log(obj['이름']);//큰돌

const _name = "이름";
console.log(_name);//이름
console.log(obj[_name]);//큰돌
console.log(obj.이름);//큰돌
console.log(obj["나이"]);//27
// console.log(obj."이름"); 에러

