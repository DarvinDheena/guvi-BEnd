const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./utils/config');
const cors = require('cors');
const { info,error } = require('./utils/logger');

// create a middleware
app.use(express.json());
app.use(cors());

// connect a database using mongoose
info('connecting to mongodb');


mongoose.connect(config.MONGODB_URI)
    .then(()=>{
        info('connected to mongodb')
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


module.exports = app
