
const Book = require("../models/Book");


/**
 * Get all the available books
 * @param {*} req 
 * @param {*} res 
 */
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        
        return res.status(200).json({
            success: true,
            books
        });
    }
    catch(error) {
        return res.status(400).json({
            success: false,
            error: `Something went wrong, ${error.message || ''}`
        });
    }
}

/**
 * Create a new book
 * @param {*} req 
 * @param {*} res 
 */
exports.createBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);
        
        return res.status(201).json({
            success: true,
            book
        });
    }
    catch(error) {
        return res.status(400).json({
            success: false,
            error: `${error.message || ''}`
        });
    }
}