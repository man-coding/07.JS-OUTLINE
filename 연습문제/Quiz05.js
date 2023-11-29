function subtract(n,m){
    return n - m;
}
const subtract2 = (n,m) => n-m;  //함수 항목이 한줄일 때는 return 없이 바로 가능

let result = subtract(5,3);
console.log(result);

let result2 = subtract2(5,3);
console.log(result2);