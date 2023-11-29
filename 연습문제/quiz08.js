// let sum = 0;
// for (let i = 0; i < arr.length; i++) {

//     let type = typeof arr[i];
//     if (type == 'number') {
//         sum = sum + arr[i];
//     }
// }
// console.log(sum);

//함수로 변경


function arrsum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {

        let type = typeof arr[i];
        if (type == 'number') {
            sum = sum + arr[i];
        }
    }
    return sum;
}
const arr1 = [1, 'aa', true, 5, 10];
console.log(arrsum(arr1));
const arr2 = ['bb', 'aa', true, 5, 10];
console.log(arrsum(arr2));

// const arrsum = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {

//         let type = typeof arr[i];
//         if (type == 'number') {
//             sum = sum + arr[i];
//         }
//     }return sum;
// }