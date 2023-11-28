// 일반함수

//함수 선언
function hello(){
    console.log('안녕하세요~');
}

//함수 호출
hello();
hello();
hello();
hello();


//반환값이 있는 함수 선언
function sum(x,y){
    return x + y;
}

const result = sum(2, 3);   //함수 호출 후 대입연산자를 사용해서 반환값을 저장해야 한다.(호출만 하면 아무 변화 없음)
console.log(result);
console.log(sum(2,5));