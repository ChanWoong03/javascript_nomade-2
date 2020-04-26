const clockContainer = document.querySelector(".js-clock"), // 전체 문서에서 js-clock slelector을 선택
      clockTitle = clockContainer.querySelector("h1"); //  clockContainer에서 h1을 선택

function getTime() {
    const date = new Date()//인수를 전달하지 않으면 현재의 날짜와 시간을 가지는 인스턴스 반환
    const minutes = date.getMinutes();//현재 분을 입력
    const hours = date.getHours();//현재 시를 입력
    const seconds = date.getSeconds();//현재 초를 입력
    clockTitle.innerText = `${hours > 9 ? hours : "0"+hours}:${minutes > 9 ? minutes : "0"+minutes}:${seconds > 9 ? seconds : "0"+seconds}`;

} 

function init() {
    getTime();
    setInterval(getTime, 1000); //getTime이라는 함수를 1초(1000밀리초)마다 실행
}
init();