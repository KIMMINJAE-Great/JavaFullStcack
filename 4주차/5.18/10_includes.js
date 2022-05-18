const a = [1,2,3,4,5];
console.log(a.includes(3));
//3 포함 되어 있는지

const pets = ["cat","dog","bat"]
console.log(pets.includes('at')); // 일부는 false
console.log(pets.includes('cat'));

[1,2,3].includes(2); //t
[1,2,3].includes(4); //f
console.log([1,2,3].includes(2,0) );//t 
console.log([1,2,3].includes(3,3) );//f (값,인덱스 위치) arr[3] 이후에는 3이라는 값이 없으므로 false를 리턴합니다.
console.log([1,2,3,NaN].includes(NaN)); //t