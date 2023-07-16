const buttons = document.querySelectorAll('.btn');
let isClicked = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    isClicked = !isClicked; // 클릭할 때마다 상태 변경
    if (isClicked) {
      // 버튼이 눌려있는 상태일 때의 동작
      console.log(`${button.innerText} 버튼이 눌렸습니다.`);
    } else {
      // 버튼이 눌려있지 않은 상태일 때의 동작
      console.log(`${button.innerText} 버튼이 해제되었습니다.`);
    }
  });
});



const shareKakao = () => {
  window.Kakao.Share.createDefaultButton({
    container: '#kakaotalk-sharing-btn',
    objectType: 'feed',
    content: {
      title: '오늘의 술! - MoodCraft',
      description: '술 취향 테스트!',
      imageUrl:
        'https://cdn.discordapp.com/attachments/1125597757185478666/1129800196100997180/topBannerRound.png',
      link: {
        mobileWebUrl: 'http://127.0.0.1:5500/frontend/ryoona/html/resultProduct.html',
        webUrl: 'http://127.0.0.1:5500/frontend/ryoona/html/resultProduct.html',
      },
    },
    buttons: [
      {
        title: '웹으로 이동',
        link: {
          mobileWebUrl: 'http://127.0.0.1:5500/frontend/ryoona/html/resultProduct.html',
          webUrl: 'http://127.0.0.1:5500/frontend/ryoona/html/resultProduct.html',
      },
    },
  ],
});
}






// const drink_list = {
//     ac:['참이슬', '서울의 밤', '안동소주 일품'], 
//     ad:['술샘','원매','이강주'], 
//     bc:['안동소주 일품','금설','서울고량주 레드'], 
//     bd:['추사','문경바람 오크','왕율주']
// };

const answer_list = {
    answer1: ['나 술찌', '난 술 고수'], 
    answer2: ['단거 사절', '이빨 썩을 정도']
};

// 프론트에서 리스트 값으로 가지고 있는것 

const back_list = [];
//백에 보내야 될 부분

const result_list = [];
//프론트에서 aa 같은 결과 보관 하는곳 


function clickEffect(event){
  console.log(event.target.textContent)
    if(answer_list['answer1'][0] === event.target.textContent){
        back_list.push(event.target.textContent);
        result_list.push('a');
    } else if (answer_list['answer1'][1] === event.target.textContent) {
        back_list.push(event.target.textContent);
        result_list.push('b');
    } else if(answer_list['answer2'][0] === event.target.textContent) {
        back_list.push(event.target.textContent);
        result_list.push('c');
    } else if(answer_list['answer2'][1] === event.target.textContent) {
        back_list.push(event.target.textContent);
        result_list.push('d');
    }

    console.log(back_list)
    console.log(result_list)
}

function result_confirm() {
    // 백으로 post 요청 하는 작업 필요(백에 있는 자료를 가져오는것)
  // 백리스트에 담겨있는걸 조건문을 통해서 분류 하기
  console.log(back_list)
  let dosu;
  let sugar;

  if(back_list[0] === '나 술찌' || back_list[0] === '난 술 고수') {
    dosu = back_list[0]
    sugar = back_list[1]
  } else { 
    sugar = back_list[0]
    dosu = back_list[1]
  }
  
  console.log('도수 :',dosu)
  console.log('슈가 :',sugar)
  
  axios.get(
    'http://localhost:8000/api/v1/result/soju/detail/',
    {params:
      {dosu: dosu,
      sugar: sugar
    }}
  )
  // 소주 있는 값이 원래 드링크_카인드(예은언니가 보내줘야되는값)라 나중에 수정 해야함   
}

// function reset 다시 선택하기 클릭 이벤트 조건 만들기



// let code = result_list.join('');
// if(code ==='ac' || code ==='ca' ){
//     localStorage.setItem("result", drink_list['ac']) 
// } else if(code ==='ad' || code ==='da') {
//     localStorage.setItem("result", drink_list['ad']) 
// } else if(code ==='bc' || code ==='cb') {
//     localStorage.setItem("result", drink_list['bc']) 
// } else if(code ==='bd' || code ==='db') {
//     localStorage.setItem("result", drink_list['bd']) 
// }




// 테스트 페이지에서 로컬 스토리지에 담고 결과 페이지에서 사용하는 방식으로 진행해볼 예정입니다~!



