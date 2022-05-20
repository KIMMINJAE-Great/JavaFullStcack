function* gen(){
  console.log('실행1');
  yield 1
  console.log('실행2');
  yield 2
  if(false) yield 3
  return 4
}
let it = gen();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

const add = a => a+10;
const a = [1,2,3];
// const result = a.map(x=>add(x))
const result = a.map(add)
console.log(result);

function* gen2 (func, arr){
  for(const item of arr)
  yield func(item)
}
console.log([...gen2(add ,a)]);