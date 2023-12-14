const express = require('express');

const app = express();

app.get('/',(request,response)=>{
    response.send('Hello Darvin');
})

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


// create a port

const PORT = 3001 ;
// let listen the server

app.listen(PORT,()=>{
    console.log('server running on port number 3001')
});