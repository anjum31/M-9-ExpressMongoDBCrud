const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  Title: {
    type: String,
    trim: true,
    required: true,
  },
  Author: {
    type: String,
    trim: true,
    required: true,
  },
  Description: {
    type: String,
    trim: true,
    required: false,
  },
  PublishedYear: {
    type: Number,
    required: false,
  },
});

const books = mongoose.model("books", bookSchema);

module.exports = books;
