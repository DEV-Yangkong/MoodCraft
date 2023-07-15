// 페이지 이동 함수
function goToNextPage(page) {
  window.location.href = page;
}

// 이미지 변경 함수
let count = 1;
function updateImage() {
  updateProgressBar(); // 프로그래스 바 업데이트
  if (count <= 9) {
    const choiceImgElement1 = document.getElementById("choiceImg_01");
    const choiceImgElement2 = document.getElementById("choiceImg_02");
    const choiceTextElement1 = document.getElementById("choiceText_01");
    const choiceTextElement2 = document.getElementById("choiceText_02");

    // 각 선택지에 대한 텍스트를 각각 설정
    const choiceText1 = getChoiceText(count, 1);
    const choiceText2 = getChoiceText(count, 2);
    choiceTextElement1.innerHTML = choiceText1;
    choiceTextElement2.innerHTML = choiceText2;

    // 이미지 변경
    const imagePath1 = `../img/choice1/choice_${count + 1}.png`;
    const imagePath2 = `../img/choice2/choice_${count + 1}.png`;
    choiceImgElement1.src = imagePath1;
    choiceImgElement2.src = imagePath2;

    count++;
    updateProgressBar();
  } else {
    openResultModal();
  }
}

// 추가된 함수
function getChoiceText(count, choiceNumber) {
  const choiceTexts = [
    [
      "뜨끈한 삼계탕이야 말로<br>최고의 여름 보양 음식이지!",
      "치킨이 최고지!<br>당연히 치킨과 맥주아니야?",
    ],
    [
      "마카롱이나 탕후루 같은<br>단 음식이 좋을 것 같아.",
      "커피나 차 같은 쓴 음료가<br> 후식으로 딱이야!",
    ],
    [
      "향긋하고 달콤한 맛의 유자차 어때?",
      "부드러운 맛의 호두라떼가<br>좋을 것 같아!",
    ],
    [
      "내 주량은 소주 세 잔!<br>But! 분위기는 즐길 수 있지!",
      "오늘의 술고래는 나! 부어라 마셔라!",
    ],
    [
      "가족과 함께 편안하고<br>따뜻한 시간을 보내고 싶어.",
      "특별한 사람과 데이트하며<br>'로맨틱'한 시간을 보내고 싶어.",
    ],
    [
      "오늘은 P.O.W.E.R 집순이!<br>넷플릭스 잔뜩봐야지!",
      "그동안 못봤던 친구들이나 만나볼까?<br>띠리리링~ 어 어디야?",
    ],
    [
      "분위기가 신나고 활기찬<br>파티 장소가 좋을 것 같아!",
      "편안한 실내에서 프라이빗하게<br>파티를 즐기고 싶어!",
    ],
    [
      "여유로운 분위기와 섬세한 연주가<br>돋보이는 재즈 음악 좋아해.",
      "화끈한 비트와 랩의 리듬이 독특한<br>힙합 음악이 좋을 것 같아!",
    ],
    [
      "요가, 헬스트레이닝 같은<br>정적인 운동이 좋아.",
      "테니스나 등산 같은<br>활동적인 운동을 좋아.",
    ],
  ];

  return choiceTexts[count - 1][choiceNumber - 1];
}

// function downdateImage() {
//   if (count > 1) {
//     // 프로그래스 바 먼저 업데이트
//     updateProgressBar();

//     count--;
//     const choiceImgElement1 = document.getElementById("choiceImg_01");
//     const choiceImgElement2 = document.getElementById("choiceImg_02");
//     const choiceTextElement1 = document.getElementById("choiceText_01");
//     const choiceTextElement2 = document.getElementById("choiceText_02");

//     // 각 선택지에 대한 텍스트를 각각 설정
//     const choiceText1 = getChoiceText(count, 1);
//     const choiceText2 = getChoiceText(count, 2);
//     choiceTextElement1.innerHTML = choiceText1;
//     choiceTextElement2.innerHTML = choiceText2;

//     // 이미지 변경
//     const imagePath1 = `../img/choice1/choice_${count}.png`;
//     const imagePath2 = `../img/choice2/choice_${count}.png`;
//     choiceImgElement1.src = imagePath1;
//     choiceImgElement2.src = imagePath2;
//   } else if (count === 1) {
//     openPreviousModal();
//   }
// }
function downdateImage() {
  if (count > 1) {
    // 프로그래스 바 먼저 업데이트
    updateProgressBar();

    count--;
    const choiceImgElement1 = document.getElementById("choiceImg_01");
    const choiceImgElement2 = document.getElementById("choiceImg_02");
    const choiceTextElement1 = document.getElementById("choiceText_01");
    const choiceTextElement2 = document.getElementById("choiceText_02");

    // 각 선택지에 대한 텍스트를 각각 설정
    const choiceText1 = getChoiceText(count, 1);
    const choiceText2 = getChoiceText(count, 2);
    choiceTextElement1.innerHTML = choiceText1;
    choiceTextElement2.innerHTML = choiceText2;

    // 이미지 변경
    const imagePath1 = `../img/choice1/choice_${count + 1}.png`;
    const imagePath2 = `../img/choice2/choice_${count + 1}.png`;
    choiceImgElement1.src = imagePath1;
    choiceImgElement2.src = imagePath2;
  }

  // count가 1 이하일 때 이전 버튼 비활성화 처리
  if (count <= 1) {
    document.getElementById("previousButton").disabled = true;
  }
}

function updateProgressBar() {
  const progressBar = document.querySelector(".bar");
  progressBar.style.width = `${(count / 10) * 100}%`;
  progressBar.textContent = `${count}/10`;
}

// 이전 모달 열기
function openPreviousModal() {
  const modal = document.getElementById("previousModal");
  modal.style.display = "block";

  // 닫기 버튼 클릭 시 모달 창 닫기
  const closeButton = document.querySelector("#previousModal .close");
  closeButton.onclick = function () {
    modal.style.display = "none";
  };
}

// 결과보기 모달 열기
function openResultModal() {
  const modal = document.getElementById("resultModal");
  modal.style.display = "block";

  // 결과보기 버튼 클릭 시 이벤트 핸들러 등록
  const resultButton = document.getElementById("resultButton");
  resultButton.addEventListener("click", function () {
    // 사용자의 성별과 나이대 정보 가져오기
    const gender = document.querySelector("input[name='gender']:checked").value;
    const age = document.querySelector("input[name='age']:checked").value;

    // 결과 페이지로 이동
    const resultPage = `./resultKind.html?gender=${gender}&age=${age}`;
    goToNextPage(resultPage);
  });

  // 닫기 버튼 클릭 시 모달 창 닫기
  const closeButton = document.querySelector("#resultModal .close");
  closeButton.onclick = function () {
    modal.style.display = "none";
  };
}

// 모달 창 닫기 버튼 클릭 시 이벤트 핸들러
const closeButton = document.querySelector(".modal .close");
closeButton.onclick = function () {
  const modal = this.closest(".modal");
  modal.style.display = "none";
};

// 프로그래스 바 초기화
updateProgressBar();

// // // 상단 정상 작동 ☝🏻-------------------------------------------------
// // // 상단 정상 작동 ☝🏻-------------------------------------------------
