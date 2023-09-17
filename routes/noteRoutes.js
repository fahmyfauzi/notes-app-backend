const express = require('express')
const router = express.Router()
const { getAllNotes,createNote } = require("../controllers/noteController");


// route create note
router.post('/', createNote)

// route get all notes
router.get('/', getAllNotes);

module.exports = router