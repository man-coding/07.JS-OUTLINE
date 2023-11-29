// html요소에 class속성 추가하기

const boxEl = document.querySelector('.box');

boxEl.addEventListener('click',function(){  //클릭하면 메소드를 수행한다.
    
    boxEl.classList.toggle('active');  // 클릭하면 class 에 'active' 가 추가되고 css기능도 추가된다.

    // let hasActive = boxEl.classList.contains('active');
    // console.log(hasActive);  -> active 추가되었나 확인하기 위함.(나중에 true 값을 받아서 더 복잡한 블록형성 할 때 쓰임)
});