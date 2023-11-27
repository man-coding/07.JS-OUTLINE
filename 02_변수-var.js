// console.log(puppy);  //변수를 선언하기 전에 사용할 수 없음.

let puppy = "cute"; //전역 변수
{
    let puppy = "so cute";  //지역변수
    
}
console.log(puppy);  //cute


console.log(cat);

var cat = "cute";
{
    var cat = "so cute";
}

console.log(cat);

//문제점: var는 블록스코프를 인식하지 못한다. 전역, 지역변수 구분이 없다.