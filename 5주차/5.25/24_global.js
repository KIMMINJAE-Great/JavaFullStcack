global.test = 'foo'
console.log(test);
console.log(__dirname);

var obj ={
  value:'hi',
  printThis(){
    console.log(this);
  }
}
var print = obj.printThis
obj.printThis() 
print()