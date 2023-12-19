const Note = require('../models/note');
const notesRouter = require('express').Router();

// endpoint to get all documents in notes collection

notesRouter.get('/',(request,response)=>{
    Note.find({},{})
        .then(notes => {
            response.status(200).json(notes)
        })
})

module.exports = notesRouter ;