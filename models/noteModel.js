const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create new schema database
const note = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: String,
        required: true,
      },
    ],
    body: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Note", note);
