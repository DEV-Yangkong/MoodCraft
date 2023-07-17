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
