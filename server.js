const express = require('express');
const { request } = require('http');

const app = express();
// endpoint to / path
app.get('/',(request,response)=>{
    response.send('<h1>Notes Application<h1>');
})

// endponit to get the notes

app.get('/notes',(request,response)=>{
    response.json(notes);
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