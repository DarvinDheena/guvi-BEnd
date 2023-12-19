const express = require('express');
const app = express();
const mongoose = require('mongoose');

// create a middleware
app.use(express.json());

// connect a database using mongoose
const url = `mongodb+srv://darvindheena98:darvin98@cluster0.triv4ws.mongodb.net/BackEnd`;
console.log('connecting to mongodb');
mongoose.connect(url)
    .then(()=>{
        console.log('connected to mongodb')
    })
    .catch((error)=>{
        console.log('error o connect a database',error);
    })
// creating a schema
const noteSchema =new mongoose.Schema({
    id : Number ,
    content : String,
    important : Boolean 
});

// create a model 
const Note = mongoose.model('Note',noteSchema,'notes');

// endpoint to get all documents in notes collection

app.get('/api/notes',(request,response)=>{
    Note.find({},{})
        .then(notes => {
            response.status(200).json(notes)
        })
})

const HOSTNAME = '127.0.0.1';
const PORT = 3001 ;
// let listen the server

app.listen(PORT,()=>{
    console.log(`server running at http://${HOSTNAME}:${PORT}`);
});