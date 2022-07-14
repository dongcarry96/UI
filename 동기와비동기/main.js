function add(x) {
  return x+2;
}

function account(a, b, cb) { //<============== 중요
  setTimeout(() => {
    cb(a +b);//30
  }, 2000);
}
const result = add(3);
const temp = result;

const result2 = account(10,20, (resukt)=>{
  console.log('result : ',result);
});
const temp2 = result2;
console.log('temp2 : ',temp2);




/* 
자바와 자바스크립트의 다른점
  1. 컴파일 하지 않는다.
  2. 순차적(호이스팅)

  동기코드&비동기코드
  자바스크립트는 동기코드인데 비동기코드로 처리해야할때가 있다. 이때 사용하는 것이 ajax api => XMLHttpRequest
  함수문 <-> 함수식(호이스팅이 이루지지 않는다)
  앞에 코드와 뒤에 코드는 종속성을 가지고 있다.
  
  리턴이 없을경우 던 디파이를 리턴하게 되어 있다.
  */