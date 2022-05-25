function Person(){
  this.value = 'LGH'
  this.printThis = function(){
    console.log(this);
  }
}

var p = new Person()
var print = p.printThis
p.printThis() //new로 생성된 객체의 printThis이기 때문에 this는 Person을 가리킨다
print() //Person의 printThis만 들고와서 print라는 변수에 할당했기 때문에 this는 node 모듈