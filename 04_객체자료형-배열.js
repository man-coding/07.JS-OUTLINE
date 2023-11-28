// 배열

const arr1 = ['Apple', 'Banana', 'Cherry'];

console.log(arr1[0]); //인덱스 사용하여 배열의 값 가져오기ㄴ
console.log(arr1[1]);
console.log(arr1[2]);

const arr2 = ['a','b',1,2,true]; //자료형 달라도 함께 저장 가능
arr2.push(3); //푸시 메소드로 새로운 요소 추가

console.log(arr2);

//객체 배열(주소를 담고 있음, 힙 영역에 배열을 생성)
const objArr = [];

//const인데 왜 값을 변경할 수 있을까? -> 주소는 변경 안됨. 힙에 있는 값만 변경

objArr.push({ name: 'Americano' });
objArr.push({ name: "Latte" });
console.log(objArr); //배열 출력
console.log(objArr[0]); //첫번째 객체 출력
console.log(objArr.length); //배열의크기는 2
