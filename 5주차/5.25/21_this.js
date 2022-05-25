a = 10; b =10;
function add(c, d, fn){//::2번째실행
  return fn(c+d)  //::3번째 실행
}

let user = {
  a:2,
  b:3,
  add(){  //user의 add     ::1번째 실행
  // console.log(this)//user를 가리킴
    add(this.a, this.b, function(z){//this.a는 2 this.b는 3//광역적인 add()1행의
    console.log(z);
    console.log(this.a+"/"+this.b);//2,3이 아니고 1행의 함수에서 a를 찾는데 없으니 undefined ,Node.js 객체  //:윈도우의 this를 가리킴:맨위의 다큐먼트의 a,b 10을 찍음 
    console.log(this);
  })
  }
}
user.add()