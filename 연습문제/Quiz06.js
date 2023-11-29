


//함수로 변경


function a(foodList){  //매개변수로 배열 받기
    console.log(foodList[0] + " " + foodList[foodList.length-1]);
}


const arr1 = ['pizza', 'Hamburger', 'Chicken', 'Steak'];
a(arr1);

const b = (foodList) => console.log(foodList[0] + " " + foodList[(foodList.length-1)]);

const arr2 = ['pizza', 'Hamburger', 'Chicken', 'Steak'];
a(arr2);
