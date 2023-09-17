const express = require('express')
const router = express.Router()
const { getAllNotes,createNote,editNote } = require("../controllers/noteController");


// route create note
router.post('/', createNote)

// route get all notes
router.get('/', getAllNotes);

// route edit note by id
router.put('/:id',editNote)

module.exports = router