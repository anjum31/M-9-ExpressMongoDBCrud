const express = require("express");
const {
  createBookList,
  getAllBook,
  getSingleBook,
  updateSingleBook,
  deleteSingleBook,
} = require("../controllers/book.controller");
const router = express.Router();

router.post("/createBookList", createBookList);

router.get("/getAllBook", getAllBook);

router.get("/getSingleBook/:id", getSingleBook);

router.put("/updateSingleBook/:id", updateSingleBook);

router.delete("/deleteSingleBook/:id", deleteSingleBook);

module.exports = router; 
