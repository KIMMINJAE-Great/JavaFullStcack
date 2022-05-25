//call & apply
function a(c, d){
  const b = [this.name, this.adjective, '이가 춤을 춥니다.', c ,d].join('')//조인 뭉쳐서 string을 돌려준다 변수들마다 ' '한칸씩 띠움
  return b
}

const obj = {name:'LGH', adjective:'splendid'}


//첫번째 인자인 obj는 a()의 상위객체가 됨 ,, 
//apply는 두번째 인자부터는 배열이 들어오면 배열 그자체를 두번째 인자로 인식
console.log(a.apply(obj, ["tiger", "air"])); 

//첫번째 인자인 obj는 a()의 상위객체가 됨 ,,
//apply는 두번째 인자부터는 배열이 들어와도 각각을 인자로 인식 
//call은 화살함수로 변경안됨. call 화살함수에서 this는 window를 가리키기 때문
console.log(a.call(obj, ["tiger", "air"]));  //console.log(a.call(obj, "tiger", "air"));

// a를 콜해서 obj를 가리키게 만들고 
// name에 adjective도  cd는
// tigr air들어간