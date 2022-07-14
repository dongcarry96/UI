const p =  new Promise ((resolve, reject) => {
  resolve('ok');
});
p.then((ok)  => {
  console.log(ok);
})

const p2 =  new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve('ok');
  },2000);
  // reject('fail');
});
p2.then((ok) => {
  console.log('첫번째 성공');
  return new Promise((resolve, reject) => {
    console.log('두번째 성공');
  },3000);
}).then(function (ok) {
  console.log(ok);
})
.catch((error)  => {
  console.log(error);
})

//일급함수 자바에 없고 자바스크립트에만 있는거 복습