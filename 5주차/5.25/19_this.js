//:::::::::::::::
//노드에서 실행시에는 노드의 실행객체를 가리킴.
//브라우저 실행 시에는 window객체를 가리킴 
// const a = ()=>{   
//   console.log(this);
// }
// a();
//:::::::::::::::

const a =function(){ //위랑 같아보이지만 다름
console.log(this);  
}
a()

// function b(){
//   console.log(this);
// }
// b();