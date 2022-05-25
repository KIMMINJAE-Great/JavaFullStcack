function Person(){
  let age = 0
  function up(){
    return ++age;
  }
  function down(){
    if(this.age>0){
    return --age;
    } else {
      return 0;
    }
  }
  return Object.freeze({up, down}) //up, down만 외부에서 접근 가능
    // return { up, down} //up, down만 외부에서 접근가능
    // return Object.freeze({age, up, down})//age, up, down 외부에서 접근 가능
    //  return {age, up, down} // age, up, down 외부에서 접근가능
}

//객체를 생성하고 속성을 보호하는 목적 =>
const a = new Person()
const ret = a.up()
console.log(ret);

const ret2 = a.up()
console.log(ret2);

const ret3 = a.up()
console.log(ret3);