// // 페이지 이동 함수
// function goToNextPage(page) {
//   window.location.href = page;
// }

// // 이미지 변경 함수
// let count = 1;
// function updateImage() {
//   if (count <= 9) {
//     const choiceImgElement1 = document.getElementById("choiceImg_01");
//     const choiceImgElement2 = document.getElementById("choiceImg_02");
//     const imagePath1 = `../img/choice1/choice_${count}.png`; // 각 선택지에 해당하는 이미지 경로
//     const imagePath2 = `../img/choice2/choice_${count}.png`; // 각 선택지에 해당하는 이미지 경로
//     choiceImgElement1.src = imagePath1;
//     choiceImgElement2.src = imagePath2;
//     count++;
//   } else {
//     openResultModal();
//   }
// }

// function downdateImage() {
//   if (count >= 1) {
//     count--;
//     const choiceImgElement1 = document.getElementById("choiceImg_01");
//     const choiceImgElement2 = document.getElementById("choiceImg_02");
//     const imagePath1 = `../img/choice1/choice_${count}.png`;
//     const imagePath2 = `../img/choice2/choice_${count}.png`;
//     choiceImgElement1.src = imagePath1;
//     choiceImgElement2.src = imagePath2;

//     if (count === 0) {
//       openPreviousModal();
//     }
//   }
// }
// // 이전 모달 열기
// function openPreviousModal() {
//   const modal = document.getElementById("previousModal");
//   modal.style.display = "block";

//   // 닫기 버튼 클릭 시 모달 창 닫기
//   const closeButton = document.querySelector("#previousModal .close");
//   closeButton.onclick = function () {
//     modal.style.display = "none";
//   };
// }

// // 결과보기 모달 열기
// function openResultModal() {
//   const modal = document.getElementById("resultModal");
//   modal.style.display = "block";

//   // 결과보기 버튼 클릭 시 이벤트 핸들러 등록
//   const resultButton = document.getElementById("resultButton");
//   resultButton.addEventListener("click", function () {
//     // 사용자의 성별과 나이대 정보 가져오기
//     const gender = document.querySelector("input[name='gender']:checked").value;
//     const age = document.querySelector("input[name='age']:checked").value;

//     // 결과 페이지로 이동
//     const resultPage = `./resultKind.html?gender=${gender}&age=${age}`;
//     goToNextPage(resultPage);
//   });

//   // 닫기 버튼 클릭 시 모달 창 닫기
//   const closeButton = document.querySelector("#resultModal .close");
//   closeButton.onclick = function () {
//     modal.style.display = "none";
//   };
// }

// // 모달 창 닫기 버튼 클릭 시 이벤트 핸들러
// const closeButton = document.querySelector(".modal .close");
// closeButton.onclick = function () {
//   const modal = this.closest(".modal");
//   modal.style.display = "none";
// };

// // 페이지 로드 시 모달 창 열기
// window.addEventListener("load", function () {
//   const modal = document.getElementById("myModal");
//   modal.style.display = "block";
// });

// // 정상출력됨 ☝🏻
// --------------------
// 페이지 이동 함수
// function goToNextPage(page) {
//   window.location.href = page;
// }

// // 이미지 변경 함수
// let count = 1;
// function updateImage() {
//   if (count <= 9) {
//     const choiceImgElement1 = document.getElementById("choiceImg_01");
//     const choiceImgElement2 = document.getElementById("choiceImg_02");
//     const imagePath1 = `../img/choice1/choice_${count}.png`; // 각 선택지에 해당하는 이미지 경로
//     const imagePath2 = `../img/choice2/choice_${count}.png`; // 각 선택지에 해당하는 이미지 경로
//     choiceImgElement1.src = imagePath1;
//     choiceImgElement2.src = imagePath2;
//     count++;
//   } else {
//     openResultModal();
//   }
// }

// function downdateImage() {
//   if (count >= 1) {
//     count--;
//     const choiceImgElement1 = document.getElementById("choiceImg_01");
//     const choiceImgElement2 = document.getElementById("choiceImg_02");
//     const imagePath1 = `../img/choice1/choice_${count}.png`;
//     const imagePath2 = `../img/choice2/choice_${count}.png`;
//     choiceImgElement1.src = imagePath1;
//     choiceImgElement2.src = imagePath2;

//     if (count === 0) {
//       openPreviousModal();
//     }
//   }
// }

// // 이전 모달 열기
// function openPreviousModal() {
//   const modal = document.getElementById("previousModal");
//   modal.style.display = "block";

//   // 닫기 버튼 클릭 시 모달 창 닫기
//   const closeButton = document.querySelector("#previousModal .close");
//   closeButton.onclick = function () {
//     modal.style.display = "none";
//   };
// }

// // 결과보기 모달 열기
// function openResultModal() {
//   const modal = document.getElementById("resultModal");
//   modal.style.display = "block";

//   // 결과보기 버튼 클릭 시 이벤트 핸들러 등록
//   const resultButton = document.getElementById("resultButton");
//   resultButton.addEventListener("click", function () {
//     // 사용자의 성별과 나이대 정보 가져오기
//     const gender = document.querySelector("input[name='gender']:checked").value;
//     const age = document.querySelector("input[name='age']:checked").value;

//     // 결과 페이지로 이동
//     const resultPage = `./resultKind.html?gender=${gender}&age=${age}`;
//     goToNextPage(resultPage);
//   });

//   // 닫기 버튼 클릭 시 모달 창 닫기
//   const closeButton = document.querySelector("#resultModal .close");
//   closeButton.onclick = function () {
//     modal.style.display = "none";
//   };
// }

// // 모달 창 닫기 버튼 클릭 시 이벤트 핸들러
// const closeButton = document.querySelector(".modal .close");
// closeButton.onclick = function () {
//   const modal = this.closest(".modal");
//   modal.style.display = "none";
// };

// // 페이지 로드 시 모달 창 열기
// window.addEventListener("load", function () {
//   const modal = document.getElementById("myModal");
//   modal.style.display = "block";
// });
// ------------------프로그래스바 테스트

// // 페이지 이동 함수
// function goToNextPage(page) {
//   window.location.href = page;
// }

// // 이미지 변경 함수
// let count = 1;
// function updateImage() {
//   if (count <= 9) {
//     const choiceImgElement1 = document.getElementById("choiceImg_01");
//     const choiceImgElement2 = document.getElementById("choiceImg_02");
//     const imagePath1 = `../img/choice1/choice_${count}.png`;
//     const imagePath2 = `../img/choice2/choice_${count}.png`;
//     choiceImgElement1.src = imagePath1;
//     choiceImgElement2.src = imagePath2;
//     count++;
//     updateProgressBar();
//   } else {
//     openResultModal();
//   }
// }

// function downdateImage() {
//   if (count > 1) {
//     count--;
//     const choiceImgElement1 = document.getElementById("choiceImg_01");
//     const choiceImgElement2 = document.getElementById("choiceImg_02");
//     const imagePath1 = `../img/choice1/choice_${count}.png`;
//     const imagePath2 = `../img/choice2/choice_${count}.png`;
//     choiceImgElement1.src = imagePath1;
//     choiceImgElement2.src = imagePath2;
//     updateProgressBar();
//   } else if (count === 1) {
//     openPreviousModal();
//   }
// }

// function updateProgressBar() {
//   const progressBar = document.querySelector(".bar_1");
//   progressBar.textContent = `${count}/10`;
//   progressBar.classList.remove("bar_1");
//   progressBar.classList.add("bar_2");
// }

// // 이전 모달 열기
// function openPreviousModal() {
//   const modal = document.getElementById("previousModal");
//   modal.style.display = "block";

//   // 닫기 버튼 클릭 시 모달 창 닫기
//   const closeButton = document.querySelector("#previousModal .close");
//   closeButton.onclick = function () {
//     modal.style.display = "none";
//   };
// }

// // 결과보기 모달 열기
// function openResultModal() {
//   const modal = document.getElementById("resultModal");
//   modal.style.display = "block";

//   // 결과보기 버튼 클릭 시 이벤트 핸들러 등록
//   const resultButton = document.getElementById("resultButton");
//   resultButton.addEventListener("click", function () {
//     // 사용자의 성별과 나이대 정보 가져오기
//     const gender = document.querySelector("input[name='gender']:checked").value;
//     const age = document.querySelector("input[name='age']:checked").value;

//     // 결과 페이지로 이동
//     const resultPage = `./resultKind.html?gender=${gender}&age=${age}`;
//     goToNextPage(resultPage);
//   });

//   // 닫기 버튼 클릭 시 모달 창 닫기
//   const closeButton = document.querySelector("#resultModal .close");
//   closeButton.onclick = function () {
//     modal.style.display = "none";
//   };
// }

// // 모달 창 닫기 버튼 클릭 시 이벤트 핸들러
// const closeButton = document.querySelector(".modal .close");
// closeButton.onclick = function () {
//   const modal = this.closest(".modal");
//   modal.style.display = "none";
// };

// // 페이지 로드 시 모달 창 열기
// window.addEventListener("load", function () {
//   const modal = document.getElementById("myModal");
//   modal.style.display = "block";
// });
// --------------------------------------위에 잘작동됨
// // 페이지 이동 함수
// function goToNextPage(page) {
//   window.location.href = page;
// }

// // 이미지 변경 함수
// let count = 0;

// function updateImage() {
//   if (count < 9) {
//     count++;
//     const choiceImgElement1 = document.getElementById("choiceImg_01");
//     const choiceImgElement2 = document.getElementById("choiceImg_02");
//     const imagePath1 = `../img/choice1/choice_${count}.png`;
//     const imagePath2 = `../img/choice2/choice_${count}.png`;
//     choiceImgElement1.src = imagePath1;
//     choiceImgElement2.src = imagePath2;
//     updateProgressBar();
//   } else {
//     openResultModal();
//   }
// }

// function downdateImage() {
//   if (count > 0) {
//     count--;
//     const choiceImgElement1 = document.getElementById("choiceImg_01");
//     const choiceImgElement2 = document.getElementById("choiceImg_02");
//     const imagePath1 = `../img/choice1/choice_${count}.png`;
//     const imagePath2 = `../img/choice2/choice_${count}.png`;
//     choiceImgElement1.src = imagePath1;
//     choiceImgElement2.src = imagePath2;
//     updateProgressBar();
//   } else if (count === 0) {
//     openPreviousModal();
//   }
// }

// function updateProgressBar() {
//   const progressBar = document.querySelector(".bar");
//   progressBar.textContent = `${count + 1}/10`;
//   const percentage = ((count + 1) / 10) * 100;
//   progressBar.style.width = `${percentage}%`;

//   // 마지막 상태(100%)에 도달하면 추가 클래스를 적용합니다.
//   if (count === 9) {
//     progressBar.classList.add("bar_10_complete");
//   } else {
//     progressBar.classList.remove("bar_10_complete"); // 10번째가 아니면 추가 클래스를 제거합니다.
//   }
// }

// // 이전 모달 열기
// function openPreviousModal() {
//   const modal = document.getElementById("previousModal");
//   modal.style.display = "block";

//   // 닫기 버튼 클릭 시 모달 창 닫기
//   const closeButton = document.querySelector("#previousModal .close");
//   closeButton.onclick = function () {
//     modal.style.display = "none";
//   };
// }

// // 결과보기 모달 열기
// function openResultModal() {
//   const modal = document.getElementById("resultModal");
//   modal.style.display = "block";

//   // 결과보기 버튼 클릭 시 이벤트 핸들러 등록
//   const resultButton = document.getElementById("resultButton");
//   resultButton.addEventListener("click", function () {
//     // 사용자의 성별과 나이대 정보 가져오기
//     const gender = document.querySelector("input[name='gender']:checked").value;
//     const age = document.querySelector("input[name='age']:checked").value;

//     // 결과 페이지로 이동
//     const resultPage = `./resultKind.html?gender=${gender}&age=${age}`;
//     goToNextPage(resultPage);
//   });

//   // 닫기 버튼 클릭 시 모달 창 닫기
//   const closeButton = document.querySelector("#resultModal .close");
//   closeButton.onclick = function () {
//     modal.style.display = "none";
//   };
// }

// // 모달 창 닫기 버튼 클릭 시 이벤트 핸들러
// const closeButton = document.querySelector(".modal .close");
// closeButton.onclick = function () {
//   const modal = this.closest(".modal");
//   modal.style.display = "none";
// };

// // 페이지 로드 시 모달 창 열기
// window.addEventListener("load", function () {
//   const modal = document.getElementById("myModal");
//   modal.style.display = "block";
// });
// ------------------------------------------------------
// 페이지 이동 함수
function goToNextPage(page) {
  window.location.href = page;
}

// 이미지 변경 함수
let count = 0;

function updateImage() {
  if (count < 10) {
    const choiceImgElement1 = document.getElementById("choiceImg_01");
    const choiceImgElement2 = document.getElementById("choiceImg_02");
    const imagePath1 = `../img/choice1/choice_${count}.png`;
    const imagePath2 = `../img/choice2/choice_${count}.png`;
    choiceImgElement1.src = imagePath1;
    choiceImgElement2.src = imagePath2;
    updateProgressBar(); // 프로그래스 바를 먼저 업데이트하고
    count++; // 이미지를 변경합니다.
  } else {
    openResultModal();
  }
}

function downdateImage() {
  if (count > 0) {
    count--;
    const choiceImgElement1 = document.getElementById("choiceImg_01");
    const choiceImgElement2 = document.getElementById("choiceImg_02");
    const imagePath1 = `../img/choice1/choice_${count}.png`;
    const imagePath2 = `../img/choice2/choice_${count}.png`;
    choiceImgElement1.src = imagePath1;
    choiceImgElement2.src = imagePath2;
    updateProgressBar();
  } else if (count === 0) {
    openPreviousModal();
  }
}

function updateProgressBar() {
  const progressBar = document.querySelector(".bar");
  const percentage = ((count + 1) / 10) * 100;
  progressBar.style.width = `${percentage}%`;

  // 첫 화면일 때 1/10 표시
  progressBar.textContent = `${count + 1}/10`;

  // 10번째까지 칠해진 칸 표시
  for (let i = 1; i <= 10; i++) {
    const barClass = `bar_${i}`;
    if (count >= i) {
      progressBar.classList.add(barClass);
    } else {
      progressBar.classList.remove(barClass);
    }
  }

  // 마지막 상태(100%)에 도달하면 추가 클래스를 적용합니다.
  if (count === 10) {
    progressBar.classList.add("bar_10_complete");
  } else {
    progressBar.classList.remove("bar_10_complete"); // 10번째가 아니면 추가 클래스를 제거합니다.
  }
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

// 페이지 로드 시 모달 창 열기
window.addEventListener("load", function () {
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
});
