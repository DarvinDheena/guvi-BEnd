const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { PORT, DB_NAME, DB_URI  } = require('./src/utils');
const app = express();

// adding middlewares
app.use(express.json());
app.use(cors());


app.use('/',(request,response)=>{
    response.status(200).send(`<h1>Welcome</h1>`)
})


// to start a server 
app.listen(PORT,()=>{
    console.log('server running on port 8000');
})
