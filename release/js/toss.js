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
      drink_name.textContent = response.data[0].drink_name;
      const result1 = document.getElementById("result1");
      result1.appendChild(drink_name);

      let image = document.createElement("img");
      image.src = response.data[0].image_url;
      const result2 = document.getElementById("result2");
      result2.appendChild(image);

      let description = document.createElement("div");
      description.textContent = response.data[0].description;
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
