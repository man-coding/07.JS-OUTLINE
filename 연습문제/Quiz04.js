const arr = [1, 'aa', true, 5, 10];



//첫번째 방법
let sum = 0;
for (let i = 0; i < arr.length; i++) {

    let type = typeof arr[i];
    if (type == 'number') {
        sum = sum + arr[i];
    }
}
console.log(sum);

//------------------2번째 방법

let result = 0;   // for문 결과값을 한번에 저장하여 결과를 출력할 땐 밖에서 선언한 후 밖에서 출력
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'number') {
        result = result + arr[i];
    }
}
console.log(result);