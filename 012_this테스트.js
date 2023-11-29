document.addEventListener('DOMContentLoaded', 
    () => {

        const btn1 = document.getElementById("btn1"); //btn1 은 엘리먼트(id)
        const btn2 = document.getElementById("btn2"); //btn2 는 엘리먼트(id)

        
        btn1.onclick = function() {
            alert(this);
            this.textContent = '버튼이름변경'; // 누르면 변경됨
        };   //버튼이 클릭되었을 때 함수 호출   -> HTMLButtonElement
        
        btn2.onclick = () => {
            alert(this);
        };   //버튼이 클릭되었을 때 함수 호출  -> window
})