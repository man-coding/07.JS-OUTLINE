// if문

const year = 2020;

if(year == 2023){
    console.log('정답입니다!');
}

if(year == 2024){
    console.log('정답입니다!'); //조건을 만족한다면 첫 번째 블럭

} else{
    console.log('오답입니다!'); //조건을 만족하지 않는다면 두 번째 블럭
}

if(year == 2023){
    console.log('year는 2023과 같습니다');
} else if(year <2023){
    console.log('year 는 2023보다 작습니다');
} else{
    console.log('year는 2023보다 큽니다');
}


// 스위치문

const rank = 1;
switch (rank) {
    case 1:
        console.log('금메달입니다');
        break;
    case 2:
        console.log('은메달입니다');
        break;
    case 3:
        console.log('동메달입니다');
        break;
    default:
        console.log('메달이 없습니다')
        break;
}