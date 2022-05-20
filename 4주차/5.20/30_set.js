var lotto = new Set()

while(lotto.size < 6){
  let ball = Math.floor(Math.random()*45) +1;
  lotto.add(ball);
  
}
console.log(lotto);

//::집합들
var setA = new Set([1,2,3,4]);
var setB = new Set([3,4,5,6]);

//::교집합
var intersection = new Set([...setA].filter(x => setB.has(x)))
console.log(intersection);

//::차집합
var difference = new Set([...setA].filter(x => !setB.has(x)));
console.log(difference);

//::합집합
var union = new Set([...setA, ...setB]);  //[] 안에다가 다
console.log("union : "+[...union].toString());



var data = [ 4, 9, 16, 25 ];
var result = data.map( function ( value, index, array ){

  return value % 2 === 1;

  } );

  console.log( result ); // 결과: [ 9, 25 ]
  //map일때 f, t, f, t
  //filter 일때 9,25

  
  var data = [ 2, 3, 4, 5 ];
  var result = data.filter ( x => x*x );
  console.log( result );  
  //map결과: [ 4, 9 , 16, 25 ]
  //filter결과 2,3,4,5
  
