//future monad function
const g = JSON.parse
const f = k => k.temp
//new Promise를 통해 Promise<pending>를 같은 타입으로 반환하고 
// 그것을 단위화된 unit함수인 resolve로 끄집어 낼 수 있으며
//끄집어 낸 결과값을 bind함수인 then으로 처리할 수 있다. 그래서 모나드를 충족한다.
const fg = x => new  Promise((resolve, reject)=> resolve(x)).then(g).then(f)

console.log = x => console.log(x)
const log2 = function(x){console.log(x);}
//_ 는 변수명 여기에서는 매개변수명이다
fg('{"temp":36.5').catch(_=> 'JSON PARSE is not working').then(log)
