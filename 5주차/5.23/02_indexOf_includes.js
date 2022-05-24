let a = ["손흥민", "살라", "호나우도"];
function fnc() {
  if (a.includes("손흥민")) return true; //return은 function안에서만 사용가능
}//해당 요소의 유무 판단
console.log(fnc());

//\/\/OR\/\/\/
let b = ["손흥민", "살라", "호나우도"];
function fnc2() {
  // let srch ="손흥민"
  let srch ="살라"
  return(b.indexOf(srch) != -1)?a.indexOf(srch):-1;//배열에서 몇번째(인덱스)에 있냐
}
console.log(fnc2());