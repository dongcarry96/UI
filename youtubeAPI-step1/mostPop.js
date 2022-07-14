const ajax = new XMLHttpRequest();
let content = '';
const MOST_URL = "https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=25&key=AIzaSyD1fM7E73qEvEMoJLktnwEO-DPBAX9ItMU&chart=mostPopular&=";
ajax.open("GET", MOST_URL, false);
ajax.send(); // 지연이 발생할 수 있다.

//console.log(ajax.response);
const result = JSON.parse(ajax.response);// { ... items:[{snippet:...}]}
const items = result.items;// Array
console.log(items.length);//25
content += `<ul class='videos'>`
for(let i=0;i<items.length;i++){
  content += `<li class='container'>`
  content += `<div class='video'>`
  content += `<img class='thumbnail' src='${items[i].snippet.thumbnails.medium.url}' alt='이미지'/>`;
  content += `<div>`;
  content += `<p class='title'>${items[i].snippet.title}</p>`;
  content += `<p class='channel'>${items[i].snippet.channelTitle}</p>`;
  content += `</div>`;
  content += `</div>`;
}
content += `</ul>`;
document.querySelector('#root').innerHTML = content;