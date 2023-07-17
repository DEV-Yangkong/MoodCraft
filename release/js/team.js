function sharePage () {
    const shareObject = {
      title: '오늘의 술! - MoodCraft',
      text: '오늘의 술! - MoodCraft',
      url: 'http://127.0.0.1:5500/release/resultProduct.html'
    };
    if (navigator.share){
      navigator
      .share(shareObject)
      .then(() => {
        alert('공유가 완료되었습니다');
      })
      .catch((error) => {
        alert('에러가 발생했습니다');
      })
    } else{
      alert('페이지 공유를 지원하지 않습니다');
    }
  }