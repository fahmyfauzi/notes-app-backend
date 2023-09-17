const express = require("express");
const router = express.Router();
const {
  getAllNotes,
  createNote,
  editNote,
  deleteNote,
} = require("../controllers/noteController");

// route create note
router.post("/", createNote);

// route get all notes
router.get("/", getAllNotes);

// route edit note by id
router.put("/:id", editNote);

router.delete("/:id", deleteNote);

module.exports = router;
