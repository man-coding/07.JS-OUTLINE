//익명함수

const add = function(a,b){
    return a + b;
}

//화살표함수로 변경
const add2 = (a, b) => a + b;


//익명함수

const sum = function(a, b){
    console.log(a+b);
    return a + b;
}
 
//화살표함수로 변경 ( 한 줄이 아닐 때는 return 키워드를 생략할 수 없다.)
const sum2 = (a,b) => {
    console.log(a + b);
    return a + b;
}
sum2(2,5);
console.log(sum2(2,6));

//익명함수
const hello = function(){
    console.log('안녕하세요~');
}

//화살표함수로 변경
const hello2 = () => console.log('안녕하세요~');
hello2();
