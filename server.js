const http = require('http'); // http 라이브러리 로드

// http 서버 생성
const server = http.createServer((req, res)=>{
    res.write('<h1>Hello Node!</h1>'); // 서버 컨텐츠 하드 코딩
    res.write('<h1>Hello server</h1>');
    res.write('<p>Hello SeokBeom</p>');
}).listen(); // 서버 열기

server.on('listening', ()=>{
    console.log("8080번 포트에서 서버 대기 중..."); // 서버 정상작동 시, 콜백 함수
});

server.on('error', ()=>{
    console.log("8080번 포트 서버 실행 중 에러 발생"); // 서버 error 발생 시, 콜백 함수
});