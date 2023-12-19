const express = require('express');
const app = express();

// create a middleware

app.use(express.json());

const HOSTNAME = '127.0.0.1';
const PORT = 3001 ;
// let listen the server

app.listen(PORT,()=>{
    console.log(`server running at http://${HOSTNAME}:${HOST}`);
});