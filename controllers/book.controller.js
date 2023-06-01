const Books = require("../modules/book.modules.schema");

exports.getAllBook = async (req, res) => {
  try {
    const book = await Books.find();
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getSingleBook = async (req, res) => {
  try {
    const book = await Books.findById(req.params.id);
    if (!book) {
      res.status(404).json({ error: "Searching Book not found" });
    } else {
      res.json(book);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log(error);
  }
};

exports.createBookList = async (req, res) => {
  try {
    const { Title, Author } = req.body;
    if (!Title.trim() && !Author.trim()) {
      return res.json({ msg: "Please input the valid data" });
    }

    const existbookTitle = await Books.findOne({ Title });
    if (existbookTitle) {
      return res.json({ Error: "Book already exist" });
    }

    const book = await new Books({
      Title,
      Author,
    }).save();

    res.json({
      Books: {
        Title: book.Title,
        Author: book.Author,
        Description: book.Description,
        PublishedYear: book.PublishedYear,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log(error);
  }
};

exports.updateSingleBook = async (req, res) => {
  try {
    const book = await Books.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    } else {
      res.json({ book });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log(error);
  }
};

exports.deleteSingleBook = async (req, res) => {
  try {
    const book = await Books.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    } else {
      res.status(204).json({ book });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log(error);
  }
};
