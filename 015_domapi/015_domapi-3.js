// 클릭 이벤트 추가하기

const boxEl = document.querySelector('.box');

// addEventListener 메소드는 클릭 이벤트가 발생할 때까지 기다렸다가 코드를 수행한다.
// 첫번째 인자: 이벤트이름, 두번째인자: 수행할함수
boxEl.addEventListener('click', function(){
    console.log('click!!');
});
    
