// 페이지가 로드될 때 결과보기 모달의 이미지를 랜덤으로 설정합니다.
window.addEventListener("DOMContentLoaded", function () {
  const resultTopImg = document.getElementById("resultTopImg");
  const randomIndex = Math.floor(Math.random() * resultTopImgArray.length);
  const randomImage = resultTopImgArray[randomIndex].imagePath;
  resultTopImg.src = randomImage;

  // 페이지 로드 시 모달 창 띄우기
  const modal = document.getElementById("recommendationModal");
  modal.style.display = "block";

  // 모달 창 닫기 버튼 클릭 시 이벤트 핸들러 등록
  const closeButton = document.querySelector("#recommendationModal .close");
  closeButton.onclick = function () {
    modal.style.display = "none";
  };
});
