// 페이지 이동 함수
function goToNextPage(page) {
  window.location.href = page;
}

// 결과 이미지 정보 배열
const resultTopImgArray = [
  {
    imagePath: "./img/beerMain.png",
    drinkKind: "beer",
  },
  {
    imagePath: "./img/wineMain.png",
    drinkKind: "wine",
  },
  {
    imagePath: "./img/sojuMain.png",
    drinkKind: "soju",
  },
  {
    imagePath: "./img/traditionalMain.png",
    drinkKind: "traditional",
  },
  {
    imagePath: "./img/rumMain.png",
    drinkKind: "rum",
  },
];

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
    const imagePath1 = `./img/choice1/choice_${count + 1}.png`;
    const imagePath2 = `./img/choice2/choice_${count + 1}.png`;
    choiceImgElement1.src = imagePath1;
    choiceImgElement2.src = imagePath2;

    // 질문 번호 및 질문 내용 업데이트
    const questionNumberElement = document.getElementById("questionNumberSpan");
    const questionElement = document.getElementById("questionSpan");
    questionNumberElement.textContent = count + 1; // 질문 번호 업데이트
    questionElement.textContent = getQuestionText(count + 1); // 질문 내용 업데이트

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

// 추가된 함수 - 질문 텍스트 가져오기
function getQuestionText(count) {
  const questions = [
    "밥 한 그릇으로 푸짐하게 식사를 할 때 어떤 음식을 선호해?",
    "복날에 특별한 음식을 준비하려고 해. 어떤 음식을 선택할까?",
    "아 배부르다~ 그렇지만 디저트 배는 따로있지! 후식으로 뭘 먹는게 좋을까?",
    "가을 향기가 느껴질 때, 어떤 음료를 마시고 싶어?",
    "오랜만의 술자리! 진탕 마셔보자",
    "고급 레스토랑에서 식사를 하게 되었어. 누구와 함께 하고 싶어?",
    "일을 쉬고 싶어서 연차를 썼다. 오늘 나의 계획은?",
    "친구들과 함께 파티를 할 때, 어디서 열까?",
    "음악을 들을 때, 어떤 스타일의 음악을 선호해?",
    "정적인 운동과 활동적인 운동 중 어떤 운동을 더 좋아해?",
  ];

  return questions[count - 1];
}

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
    const imagePath1 = `./img/choice1/choice_${count + 1}.png`;
    const imagePath2 = `./img/choice2/choice_${count + 1}.png`;
    choiceImgElement1.src = imagePath1;
    choiceImgElement2.src = imagePath2;

    // 질문 번호 및 질문 내용 업데이트
    const questionNumberElement = document.getElementById("questionNumberSpan");
    const questionElement = document.getElementById("questionSpan");
    questionNumberElement.textContent = count + 1; // 질문 번호 업데이트
    questionElement.textContent = getQuestionText(count + 1); // 질문 내용 업데이트
  } else if (count === 1) {
    openPreviousModal();
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

  // 처음으로 버튼 클릭 시 이벤트 처리
  const goBackButton = document.getElementById("goBackButton");
  goBackButton.onclick = function () {
    // 모달을 닫은 후 이전 페이지로 돌아가기
    location.reload();
  };
}

// 결과에 따라 이미지를 설정하는 함수
function setTopImage(result) {
  const resultTopImg = document.getElementById("resultTopImg");
  const matchedResult = resultTopImgArray.find(
    (item) => item.drinkKind === result
  );
  if (matchedResult) {
    resultTopImg.src = matchedResult.imagePath;
  }
}

// 페이지가 로드될 때 결과를 가져와서 이미지 설정
window.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const drinkKind = urlParams.get("drink_kind");
  setTopImage(drinkKind);
});

// 결과보기 모달 열기
function openResultModal() {
  const modal = document.getElementById("resultModal");
  modal.style.display = "block";

  // 결과보기 버튼 클릭 시 이벤트 핸들러 등록
  const resultButton = document.getElementById("resultButton");
  resultButton.addEventListener("click", function () {
    // 배열에서 랜덤하게 음료 종류 선택
    const randomIndex = Math.floor(Math.random() * resultTopImgArray.length);
    const drinkKind = resultTopImgArray[randomIndex].drinkKind;

    // 결과 페이지로 이동할 URL 생성
    const resultPage = `./resultKind.html?drink_kind=${drinkKind}`;

    // 결과 페이지로 이동
    goToNextPage(resultPage);

    // AJAX 요청으로 백엔드에 데이터 전송
    sendResultData(drinkKind);
  });

  // 닫기 버튼 클릭 시 모달 창 닫기
  const closeButton = document.querySelector("#resultModal .close");
  closeButton.onclick = function () {
    modal.style.display = "none";
  };
}

// 프로그래스 바 초기화
updateProgressBar();

// 페이지가 로드될 때 결과보기 모달의 이미지를 랜덤으로 설정합니다.
window.addEventListener("DOMContentLoaded", function () {
  const resultTopImg = document.getElementById("resultTopImg");
  const randomIndex = Math.floor(Math.random() * resultTopImgArray.length);
  const randomImage = resultTopImgArray[randomIndex].imagePath;
  resultTopImg.src = randomImage;
});

// 모달 창 닫기 버튼 클릭 시 이벤트 핸들러
const closeButton = document.querySelector(".modal .close");
closeButton.onclick = function () {
  const modal = this.closest(".modal");
  modal.style.display = "none";
};

// // // 상단 정상 작동 ☝🏻-------------------------------------------------
// // // 상단 정상 작동 ☝🏻-------------------------------------------------
// main.js 파일

// 상품추천 버튼 클릭 시 이벤트 핸들러 등록
const productButton = document.getElementById("productButton");
productButton.onclick = function () {
  // 배열에서 랜덤하게 음료 종류 선택
  const randomIndex = Math.floor(Math.random() * resultTopImgArray.length);
  const drinkKind = resultTopImgArray[randomIndex].drinkKind;

  // 상품추천 페이지로 이동할 URL 생성 (URL 파라미터 추가)
  const recommendationPage = `./test.html?drink_kind=${drinkKind}`;

  // 상품추천 페이지로 이동
  window.location.href = recommendationPage;
};

function goToTestPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const drinkKind = urlParams.get("drink_kind");
  const url = `./test.html?drink_kind=${drinkKind}`;
  goToNextPage(url);
}
