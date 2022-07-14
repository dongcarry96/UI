function handleEnter() {
  if(event.keyCode === 13){// 키를 눌렀을 때 - 13번이면 Enter코드값
    alert(`${query}`);
    console.log('엔터 쳤을 떄');
    searchList();
  }
}
// var는 사용하지 않는다 - 호이스팅 발동 - ES5
function searchList(){
  const query = document.querySelector('.input').value;
  console.log('사용자가 입력한 검색어 : '+query);
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch(`https://api.hnpwa.com/v0/item/31914288.json?id=31914288&maxResults=25&q=${query}&part=snippet`, requestOptions)
    .then(response => response.text())
    .then(result => {
      const comments = result.comments;
      const videoList = [];
      videoList.push(`<ul class='videos'>`);
      for(let i=0;i<items.length;i++){
        videoList.push(`<li class='container'>`);
        videoList.push(`<div class='video'>`);
        videoList.push(`<img class='thumbnail' src='${items[i].snippet.thumbnails.medium.url}' alt='이미지'/>`);
        videoList.push(`<div>`);
        videoList.push(`<p class='title'>${items[i].snippet.title}</p>`);
        videoList.push(`<p class='channel'>${items[i].snippet.channelTitle}</p>`);
        videoList.push(`</div>`);
        videoList.push(`</div>`);
        }
        videoList.push(`</ul>`);
        document.querySelector('#root').innerHTML = videoList.join("");
      })
    .catch(error => console.log('error', error));
    }