import { DeptVO } from "./DeptVO.js";
// ES6 지원 import문
// NodeJS 지원 require('express') -CommonJS
const myDVO = new DeptVO(50,'개발부', '부산');
console.log(myDVO.dename);
console.log(myDVO.loc);
console.log(myDVO.deptno);