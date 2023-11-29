// let m = 3;
// let n = 5;
// for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= n; j++) {
//         console.log('*');
//     }
//     console.log('');
// }



//함수로 변경

function star(m, n) {
    let printStar = ''
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            printStar += '*';
        }
        printStar += '\n';
    }
    
   return printStar;
}
// star(5, 3);
console.log(star(5, 3));

// console.log(printStar);



// const star2 = (m, n) => {
//     for (let i = 1; i <= m; i++) {
//         for (let j = 1; j <= n; j++) {
//             printStar += '*';
//         }
//         printStar += '';
//     }
//     return printStar;
// }