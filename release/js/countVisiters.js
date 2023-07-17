// countVisiters.js 파일

// 방문자 수 세는 함수
function countVisiters() {
  // POST 요청을 보낼 URL 설정 (백엔드의 URL을 입력하세요)
  const url = "http://127.0.0.1:8000/api/v1/visiters/";

  // AJAX를 사용하여 GET 요청 보내기
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // 요청이 성공적으로 완료되었을 때 처리할 코드 작성
        try {
          const response = JSON.parse(xhr.responseText);
          if (response && response.count !== undefined) {
            const participantCount = response.count;
            const numbersElement = document.getElementById("numbers");
            if (numbersElement) {
              numbersElement.textContent = participantCount
                .toString()
                .padStart(7, "0");
            }
            console.log("GET request successful!");
            console.log("방문자 수:", participantCount);
          } else {
            console.error(
              "Invalid response data: 'participants' key is missing or undefined."
            );
          }
        } catch (error) {
          console.error("Error parsing response:", error);
        }
      } else {
        // 요청이 실패했을 때 처리할 코드 작성
        console.error("GET request failed.");
      }
    }
  };
  xhr.send();
}

// 페이지가 로드될 때 방문자 수 세기
window.addEventListener("DOMContentLoaded", function () {
  countVisiters(); // countVisiters() 함수 호출
});
