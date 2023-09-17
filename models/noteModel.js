const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// create new schema database
const note = new Schema({
    title: String,
    tags: [String],
    body: String
}, {
    timestamps: true
});

module.exports = mongoose.model("Note", note);