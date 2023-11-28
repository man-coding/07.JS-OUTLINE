// while문

let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}

//for문

for (let i = 1; i <= 10; i++) { //초기식; 조건식; 증감식
    console.log(i);
}

//for-in문 

let arr = [3,4,5];
for(let i in arr){ //인덱스를 순회한다.
    console.log(i + ', ' + arr[i]);
}