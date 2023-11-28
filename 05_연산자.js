//산술연산자
console.log(10+2);   //12
console.log(10-2);   //8
console.log(10*2);   //20
console.log(10/2);  //5
console.log(10%2);    //0

//대입연산자
let x = 1;

//증감연산자
console.log(++x);    //2
console.log(x++);    //2
console.log(--x);   //2
console.log(x--);    //2

//비교연산자
console.log(1 == "1");//값이 같으면 참(자료형 체크 안 함)
console.log(1 === "1");//값과 자료형이 모두 같으면 참
console.log(1 != 2); //값이 다르면 참
console.log(1 > 2);
console.log(1 >= 2);
console.log(1 < 2);
console.log(1 <= 2);

//논리연산자
console.log(true && true); //모두 참이면 참   true
console.log(true&&false);   //false
console.log(true || true); // 둘 중 하나라도 참이면 참     true
console.log(true || false);   //true
console.log(!true); // 참이면 거짓, 거짓이면 참을 반환    false

//문자열결합연산자
console.log("좋은" + "하루 되세요!");

//typeof 연산자
console.log(typeof '42');
console.log(typeof 42);
console.log(typeof 1.123);   //number
console.log(typeof true);   //boolean
console.log(typeof function(){});   //function
console.log(typeof undefined);
console.log(typeof null);  //object  
console.log(typeof {});    //object
console.log(typeof []);      //object
