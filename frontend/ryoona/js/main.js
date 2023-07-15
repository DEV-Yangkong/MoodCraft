const drink_list = {
    ac:['참이슬', '서울의 밤', '안동소주 일품'], 
    ad:['술샘','원매','이강주'], 
    bc:['안동소주 일품','금설','서울고량주 레드'], 
    bd:['추사','문경바람 오크','왕율주']
};

const answer_list = {
    answer1: ['낮고', '높고'], 
    answer2: ['안달고', '달고']
};

// 프론트에서 리스트 값으로 가지고 있는것 

const back_list = [];
//백에 보내야 될 부분

const result_list = [];
//프론트에서 aa 같은 결과 보관 하는곳 


function clickEffect(e){
    if(answer_list['answer1'][0] === e.target.text){
        back_list.push(e.target.text);
        result_list.push('a');
    } else if (answer_list['answer1'][1] === e.target.text) {
        back_list.push(e.target.text);
        result_list.push('b');
    } else if(answer_list['answer2'][0] === e.target.text) {
        back_list.push(e.target.text);
        result_list.push('c');
    } else if(answer_list['answer2'][1] === e.target.text) {
        back_list.push(e.target.text);
        result_list.push('d');
    }
}

function result_confirm() {
    // 백으로 post 요청 하는 작업 필요
    let code = result_list.join('');
    if(code ==='ac' || code ==='ca' ){
        localStorage.setItem("result", drink_list['ac']) 
    } else if(code ==='ad' || code ==='da') {
        localStorage.setItem("result", drink_list['ad']) 
    } else if(code ==='bc' || code ==='cb') {
        localStorage.setItem("result", drink_list['bc']) 
    } else if(code ==='bd' || code ==='db') {
        localStorage.setItem("result", drink_list['bd']) 
    }
}






{/* <button>낮고</button>
    <button>높고</button>
   
    <button>단거 사절</button>
    <button>이빨 썩을 정도</button> 
    여기 안에 클릭 이벤트 함수도 달아야함
*/}

// 테스트 페이지에서 로컬 스토리지에 담고 결과 페이지에서 사용하는 방식으로 진행해볼 예정입니다~!