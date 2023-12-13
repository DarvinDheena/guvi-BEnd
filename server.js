// let import the http
const http = require('http');
const { json } = require('stream/consumers');

// create a array of object

let notes = [
    {
        "id":1,
        "content":'node js',
        "important": true
    },
    {
        "id":2,
        "content":'open source',
        "important": false
    },
    {
        "id":3,
        "content":'server side an web development',
        "important": true
    }
]

// let create the server 
const app = http.createServer((request,response)=>{
    response.statusCode = 200 ;
    response.setHeader('content-type','JSON');
    response.end(JSON.stringify(notes));
});
// create a port

const PORT = 3001 ;
// let listen the server

app.listen(PORT,()=>{
    console.log('server running on port number 3001')
});