
const mongoose = require("mongoose");

const slugify = require("slugify");

const BookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "A title is needed please"],
            unique: true,
            maxlength: [50, "The title should'nt be very loong"],
            trim: true
        },
        slug: String,
        author: {
            type: String,
            required: [true, "The author should be specified"],
            trim: true
        }
    },
    { timestamps: true}
);

BookSchema.pre("save", function(next) {
    this.slug = slugify(this.title, { lower: true });
    next();
});

module.exports = mongoose.model("Book", BookSchema);
