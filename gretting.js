const form = document.querySelector(".js-form"),            // js-form을 선택하여 form 변수로 입력
      input = form.querySelector("input"),                  //form 안의 js-form을 선택하여 input 변수 선언
      greeting = document.querySelector(".js-greetings")

const USER_LS = "currentUser"                               //user_ls에 currentuser을 삽입
      SHOWING_CN = "showing"; //showing_cn은 showing이다

function saveName(text){
    localStorage.setItem(USER_LS, text); //localStorage에 user_ls와 text 저장
}

function handleSubmit(event){
    event.preventDefault(); //event가 이동되는것을 금지 (기본값 : 이벤트 호출 -> document로 이동)
    const currentValue = input.value; //input으로 value값을 입력 받는다
    paintGreeting(currentValue); //입력받은 value를 입력창 대신에 생성(paintgreeting함수 실행)
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);//제출을하면 handleSubmit 실행
}


function paintGreeting(text){ //form을 제거하고 greeting을 생성하고 text를 입력하는 함수
    form.classList.remove(SHOWING_CN); //목록으로부터 showing_cn을 제거
    greeting.classList.add(SHOWING_CN); //목록으로부터 showing_cn을 추가
    greeting.innerText = `Hello ${text}` //`내용`을 innerText를 이용해 리턴시킨다
}
function loadName()  {                                      //loadname이라는 함수 정의
    const currentUser = localStorage.getItem(USER_LS)       //user_ls가 null/true와 같은 boolean 값을 줄것, localStorage라는 공간에 user_ls가 있는가 확인.
    if (currentUser === null) {                             //만약 currentUser이 빈공간이라면
       askForName();
    } else {
          paintGreeting(currentUser);
    }
}



      function init(){
          loadName();
}
init();