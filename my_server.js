const http = require('http') // http 서버를 이용하기 위해서 로드
const fs = require('fs').promises // .promises를 사용하면 임포트함과 동시에 fs를 프로미스 객체로 할당함.

const server = http.createServer((req, res)=>{
   // console.log(req)
    try{
        if (req.url === '/'){
            console.log('This is index page.')
        }
    }catch (err){
        console.error(err);
    }
}).listen(8080);

server.on('listening', ()=>{
    console.log('Connected');
});

server.on('error', ()=>{
    console.log('Error occurs');
});