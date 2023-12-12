// let import the http
const http = require('http');

// let create the server 
const app = http.createServer((request,response)=>{
    response.writeHead(200,{'content-type': 'text/plain'});
    response.end('Hello World');
});

// let listen the server

app.listen(3001);