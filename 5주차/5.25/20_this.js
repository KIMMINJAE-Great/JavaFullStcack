function Person(){
  this.age = 0;
  // setTimeout(function(){//node (Timeout객체를 가리킴), browser(window 가리킴)에서는 ::화살함수 사용시와 기본형식의 결과출력시 다름
  setTimeout( ()=>{ //node, browser(Person 가리킴)
    this.age++
    //function일 때는 this.age는 상위객체의 age를 가리킴. 그러나 없어서 NaN이 됨.
    console.log(this, this.age);
  }, 1000)
}

var p = new Person()
// console.log(p);
