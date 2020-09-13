const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is Required Field"],
        minlength:[4, "Minimum 4 characters"]
    },
    price: {
        type: Number,
        required: [true, "Price is Required Field"],
    },
    description: {
        type: String,
        required: [true, "Description is Required Field"],
        minlength:[1, "Minimum 4 characters"]
    },
}, {timestamps: true});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;