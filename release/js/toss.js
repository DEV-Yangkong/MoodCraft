// 페이지 이동 함수
function goToNextPage(page) {
  window.location.href = page;
}

import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";

let URL = window.location.search;
console.log(URL);

const urlParams = new URLSearchParams(URL);

const drink_kind = urlParams.get("drink_kind");
const dosu = urlParams.get("dosu");
const sugar = urlParams.get("sugar");

console.log(drink_kind);
console.log(dosu);
console.log(sugar);

function Result() {
  axios
    .get("http://localhost:8000/api/v1/result/detail/", {
      params: {
        drink_kind: drink_kind,
        dosu: dosu,
        sugar: sugar,
      },
    })
    .then((response) => {
      let drink_name = document.createElement("div");
      drink_name.textContent = response.data[1].drink_name;
      const result1 = document.getElementById("result1");
      result1.appendChild(drink_name);

      let image = document.createElement("img");
      image.src = response.data[1].image_url;
      const result2 = document.getElementById("result2");
      result2.appendChild(image);

      let description = document.createElement("div");
      description.textContent = response.data[1].description;
      const result3 = document.getElementById("result3");
      result3.appendChild(description);
    });
}
Result();

// axios.get(
//     'http://localhost:8000/api/v1/result/detail/',
//     {params:
//       {drink_kind: drink_kind,
//         dosu: dosu,
//       sugar: sugar
//     }}
//   )

//url 복사하기
function sharePage() {
  const shareObject = {
    title: "오늘의 술! - MoodCraft",
    text: "오늘의 술! - MoodCraft",
    href: "http://127.0.0.1:5500/release/resultProduct.html",
  };
  if (navigator.share) {
    navigator
      .share(shareObject)
      .then(() => {
        alert("공유가 완료되었습니다");
      })
      .catch((error) => {
        alert("에러가 발생했습니다");
      });
  } else {
    alert("페이지 공유를 지원하지 않습니다");
  }
}

// 윤아꺼에 추가한 자스 코드:

//페이스북 공유창
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

//카카오톡 공유창
function shareOnKakao() {
  Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: "카카오톡 공유하기 테스트",
      description: "카카오톡 공유하기를 테스트해봅니다.",
      imageUrl:
        "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FxmWRS%2FbtsnFK2q2us%2FCiJP4Qiy9OkHbJOaTrJNs1%2Fimg.png",
      link: {
        webUrl: "www.moodcraft.shop",
        mobileWebUrl: "www.moodcraft.shop",
      },
    },
  });
}
