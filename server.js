const http = require('http');

const server = http.createServer((req, res)=>{
    res.write('<h1>Hello Node!</h1>');
    res.write('<h1>Hello server</h1>');
    res.write('<p>Hello SeokBeom</p>');
}).listen();

server.on('listening', ()=>{
    console.log("8080번 포트에서 서버 대기 중...");
});

server.on('error', ()=>{
    console.log("8080번 포트 서버 실행 중 에러 발생");
});