const express = require('express');
const app = express();
const cors = require('cors');
const notesRouter = require('./controllers/notes');


// create a middleware
app.use(express.json());
app.use(cors());

app.use('/api/notes',notesRouter);



module.exports = app
