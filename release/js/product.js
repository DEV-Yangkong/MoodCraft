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



//카카오톡 API 연결, 나중에 주소 바꾸기
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
        const target = document.getElementsByClassName('Q1');
        console.log(target)
        for (let i = 0; i < target.length; i++) {
          target[i].disabled = true;
        }
    } else if (answer_list['answer1'][1] === event.target.textContent) {
        back_list.push(event.target.textContent);
        result_list.push('b');
        const target = document.getElementsByClassName('Q1');
        for (let i = 0; i < target.length; i++) {
          target[i].disabled = true;
        }
    } else if(answer_list['answer2'][0] === event.target.textContent) {
        back_list.push(event.target.textContent);
        result_list.push('c');
        const target = document.getElementsByClassName('Q2');
        for (let i = 0; i < target.length; i++) {
          target[i].disabled = true;
        }
    } else if(answer_list['answer2'][1] === event.target.textContent) {
        back_list.push(event.target.textContent);
        result_list.push('d');
        const target = document.getElementsByClassName('Q2');
        for (let i = 0; i < target.length; i++) {
          target[i].disabled = true;
        }
    }

    console.log(back_list)
    console.log(result_list)
}

//3번 답 클릭시 버튼 비활성화 해주는 함수
function clickQuestion1() {
  const target = document.getElementsByClassName('Q3');
        console.log(target)
  for (let i = 0; i < target.length; i++) {
    target[i].disabled = true;
  }
} 

//4번 답 클릭시 버튼 비활성화 해주는 함수
function clickQuestion2() {
  const target = document.getElementsByClassName('Q4');
        console.log(target)
  for (let i = 0; i < target.length; i++) {
    target[i].disabled = true;
  }
} 


function result_confirm() {
    //어떤 데이터를 받을지 백한테 정해주고 그걸 보낸 다음 해당하는 데이터 백에서 받아옴(get)
    // 백으로 get 요청 하는 작업 필요(백에 있는 자료를 가져오는것)
  // 백리스트에 담겨있는걸 조건문을 통해서 분류 하기
  console.log(back_list)
  let dosu;
  let sugar;
  console.log(back_list[0])
  console.log(back_list[1])

  if (back_list[0] && back_list[1])
  {
    if(back_list[0] === '나 술찌' || back_list[0] === '난 술 고수') {
      dosu = back_list[0]
      sugar = back_list[1]
    } else { 
      sugar = back_list[0]
      dosu = back_list[1]
    }
    
    
    if( dosu === '나 술찌') {
      dosu = 'low'
    }
    else{
      dosu = 'high'
    }
    if(sugar === '단거 사절') {
      sugar = 'dry'
    } else {
      sugar = 'sweet'
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

    location.href='http://127.0.0.1:5500/release/resultProduct.html';
  } else {
    alert("다음 질문도 선택해주세요~!")
  }

  // 소주 있는 값이 원래 드링크_카인드(예은언니가 보내줘야되는값)라 나중에 수정 해야함   
}






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


// function Select () {
//   if()
// }




