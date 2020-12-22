
const express = require("express");
const { createBook, getAllBooks } = require("../controllers/BookController");

const router = express.Router();

router.route('/books').get(getAllBooks).post(createBook);

module.exports = router;