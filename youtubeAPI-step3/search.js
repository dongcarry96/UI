function handleEnter() {
  if(event.keyCode === 13){// 키를 눌렀을 때 - 13번이면 Enter코드값
    alert(`${query.value}`);
    searchList();
  }
}
function searchList(){
const query = document.querySelector('.input');
console.log('사용자가 입력한 검색어 : '+query.value);
const ajax = new XMLHttpRequest();
// const SEARCH_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=25&q=${query.value}&key=AIzaSyD1fM7E73qEvEMoJLktnwEO-DPBAX9ItMU&chart=mostPopular&=video`;
const SEARCH_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query.value}&key=AIzaSyCjvO-9mOZdkYS8U9gmbI2X_pdK_R_8N08&type=video`;

ajax.open("GET", SEARCH_URL, false);
ajax.send();
const videoList = [];
//console.log(ajax.response);
const result = JSON.parse(ajax.response);// { ... items:[{snippet:...}]}
const items = result.items;// Array
console.log(items.length);//25
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
  videoList.push(`</li>`);
}
videoList.push(`</ul>`);
document.querySelector('#root').innerHTML = videoList.join("");
}////////////////end of searchList