

let URL = window.location.href.substr(30);
console.log(URL);

const urlParams = new URLSearchParams(URL);

const drink_kind = urlParams.get("drink_kind");
const dosu = urlParams.get("dosu");
const sugar = urlParams.get("sugar");

console.log(drink_kind);
console.log(dosu);
console.log(sugar);


axios.get(
    'http://localhost:8000/api/v1/result/soju/detail/',
    {params:
      {drink_kind: URL,
        dosu: dosu,
      sugar: sugar
    }}
  )