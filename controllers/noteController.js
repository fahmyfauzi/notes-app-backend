const Note = require("../models/noteModel");

// process get all notes
const getAllNotes = async (req, res) => {
  try {
    //mendapatkan nomor page dari query default 1
    const page = parseInt(req.query.page) || 1;

    // mendapatkan limit dari query default ditampilkan 5 data
    const limit = parseInt(req.query.limit) || 5;

    // Menghitung item yang harus dilewati (skip) berdasarkan halaman dan jumlah item per halaman
    const skip = (page - 1) * limit;

    // find all notes dan  Mengambil data dengan paginasi
    const notes = await Note.find({}).skip(skip).limit(limit);

    // Menghitung jumlah total catatan di database
    const totalNotes = await Note.countDocuments();

    // total page
    const totalPages = Math.ceil(totalNotes / limit);

    // retur respon success
    res.status(200).json({
      status: "Success",
      data: {
        notes,
        totalPages,
        currentPage: page,
        totalItem: totalNotes,
      },
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
// process edit note
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

// process delete note
const deleteNote = async (req, res) => {
  try {
    //tangkap id lewat parameter
    const id = req.params.id;

    // cari id dan hapus
    const note = await Note.findByIdAndRemove(id);

    // jika note tidak ditemukan
    if (!note) {
      res.status(404).json({
        status: "fail",
        mesaage: "Catatan gagal dihapus. Id catatan tidak ditemukan",
      });
    }
    // respon success delete
    res.status(200).json({
      status: "Success",
      message: "Catatan berhasil dihapus",
      data: note,
    });
  } catch (error) {
    // respon error
    res.status(500).json({
      status: "fail",
      mesaage: error.mesaage,
    });
  }
};

module.exports = {
  getAllNotes,
  createNote,
  editNote,
  deleteNote,
};
