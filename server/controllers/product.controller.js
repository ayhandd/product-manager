const Product = require('../models/product.model');

module.exports = {
    getAllProduct : (req, res) => {
        Product.find()
        .then(allProduct => res.json({product: allProduct}))
        .catch(err => res.json({message: "There is an error for getting all product", error: err}))
    },
    getProduct : (req, res) => {
        Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(err => res.json({message: "There is an error for getting product", error: err}))
    },
    createProduct : (req, res) => {
        Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(err => res.json({message: "There is an error for creating product", error: err}))
    },
    updateProduct : (req, res) => {
        Product.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json({message: "There is an error for updating product", error: err}))
    },
    deleteProduct : (req, res) =>{
        Product.findByIdAndDelete(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json({ message: "There is an error for deleting product", error: err }));
    }
}