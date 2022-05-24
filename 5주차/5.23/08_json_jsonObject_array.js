
var obj = {"id":"4"} //JSON Object 형식
console.log(JSON.parse(JSON.stringify(obj)));


var months = [{"id":1,"name":"Jan"},{"id":2,"name":"Feb"}];//JSON Array 형식
console.log(JSON.stringify(months));
var monthsJson = JSON.parse(JSON.stringify(months));
console.log(typeof months);
console.log(monthsJson[0]);
console.log(monthsJson[0].id);


//string to json
// let a = '{"name":"LifeisGoodandHappy"}';
// console.log(typeof a);
// console.log(a.name);
// a = JSON.parse(a);
// console.log(typeof a);
// console.log(a.name);

//array to Json
const myArr = ["banana", "apple"]
const jsonArr = JSON.parse(JSON.stringify(myArr))//배열을 객체로 바꾼다
console.log(typeof jsonArr);
console.log(jsonArr);

//object to JSON
const myObj = {name:"son", data: new Date()}
const jsonObj = JSON.parse(JSON.stringify(myObj))
console.log(typeof jsonObj);
console.log(jsonObj.name);