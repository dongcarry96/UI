const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";
const container = document.getElementById("main");
const content = document.createElement("div");
const requestOptions = {
  method: "GET",
  redirect: "follow",
};
/* 
  <ul>
    <li></li>
    <li></li>
    <li></li>
  </ul>
*/
fetch(NEWS_URL, requestOptions)
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    const ul = document.createElement("ul");
    for (let i = 0; i < 10; i++) {
      const div = document.createElement("div");
      div.innerHTML = `
      <li>
      <a href='#${result[i].id}'>
      ${result[i].title}(${result[i].comments_count})
      </a>
      </li>
      `;
      ul.appendChild(div.firstElementChild);
      container.appendChild(ul);
    }
    container.appendChild(ul);
    container.appendChild(content);
  })
  .catch((error) => console.log("error", error));

const requestOptions2 = {
  method: "GET",
  redirect: "follow",
};
window.addEventListener("hashchange", () => {
  console.log(location.hash);
  const id = this.location.hash.substring(1); // #31914288에서 첫번째 자리 #은 잘라내고 쓴다.
  fetch(CONTENT_URL.replace("@id", id), requestOptions2)
    .then((response) => response.json())
    // callback
    // .then((result) => console.log(result))
    .then((result) => {
      const title = this.document.createElement("h1");
      title.innerHTML = result.title;
      content.appendChild(title);
    })
    .catch((error) => console.log("error", error));
});
// 라우터에서 화면 전환하는 걸 구현해 본다
// 뉴스 내용 보기를 화면 전환을 통해서 재구성 해보기
// 조건에 따라 화면 전환이 일어나야 하므로 조건문에
// 함수 호출을 통해서 이 문제를 해결해 본다.
// 무엇을 기준할 것인가?

/* 
  글 목록의 링크는 #이었음 그러면 location.hash에 #이 들어왔음
  그러면 이것으로 어떤 참 것짓을 나눌 수 있지?
  location.hash에 #만 들어오면 빈값을 반환함
  첫 진입일때는 getNewsList호출하고
  해시값이 존재하면 getNewsContent호출한다.
*/
function router() {
  const hashValue = location.hash;
  //첫 진입이면
  if(hashValue === "") {
    getNewsList();
  }else {
    getNewsContent();
  }
}

  window.addEventListener("hashchange", router);// 이벤트 핸들러 매핑
  router();
