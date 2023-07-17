// 페이지 이동 함수
function goToNextPage(page) {
  window.location.href = page;
}

// 테스트 시작 버튼 클릭 시 이벤트 핸들러
const startButton = document.getElementById("startButton");
startButton.addEventListener("click", function () {
  // 페이지 이동
  goToNextPage("./choice.html");
});

//페이스북 공유창
// index.js
function shareOnFacebook() {
  const url = "http://localhost:5500"; // 여기에 공유할 URL을 입력하세요
  const shareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    url
  )}`;
  const width = 500; // 팝업 창의 가로 크기
  const height = 300; // 팝업 창의 세로 크기
  const left = window.screen.width / 2 - width / 2; // 화면 중앙에 위치
  const top = window.screen.height / 2 - height / 2; // 화면 중앙에 위치

  window.open(
    shareURL,
    "_blank",
    `width=${width}, height=${height}, top=${top}, left=${left}`
  );
}
