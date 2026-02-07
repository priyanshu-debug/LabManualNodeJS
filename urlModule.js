const url=require('url');
const fs=require('fs');
// const myURL= url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
const add='https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash';
// const myURL=url.parse(add,true);
const myURL=new URL(add);
console.log(myURL);