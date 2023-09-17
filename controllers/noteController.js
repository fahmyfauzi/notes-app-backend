const Note = require("../models/noteModel");

// process get all notes
const getAllNotes = async (req, res) => {
  try {
    // find all notes
    const notes = await Note.find({});

    // retur respon success
    res.status(200).json({
      status: "Success",
      data: notes,
    });
  } catch (error) {
    // return respon error
    res.status(500).json({
      status: "fail",
      error: error.message,
    });
  }
};

// process create note
const createNote = async (req, res) => {
  try {
    // create note
    const note = await Note.create(req.body);

    // return respon success
    res.status(201).json({
      status: "Succes",
      message: "Catatan berhasil ditambahkan",
      data: note,
    });
  } catch (error) {
    // return respon errror
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

const editNote = async (req, res) => {
  try {
    // tangkap id melalui parameter
    const id = req.params.id;

    // cari berdasarkan id dan update
    const note = await Note.findByIdAndUpdate(id, req.body);

    // jika id tidak tidakditemukan
    if (!note) {
      // return respon gagal
      res.status(404).json({
        status: "fail",
        message: "Gagal memperbarui catatan. Id catatan tidak ditemukan",
      });
    }
    // cari note find by id yang sudah update
    const noteUpdate = await Note.findById(id);

    // return respon success
    res.status(200).json({
      status: "Success",
      message: "Catatan berhasil diperbaharui",
      data: noteUpdate,
    });
  } catch (error) {
    // return respon error
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

module.exports = {
  getAllNotes,
  createNote,
  editNote,
};
