const PersonController = require("../controllers/product.controller");
const ProductController = require("../controllers/product.controller");

module.exports = app => {
    app.get("/api/products", ProductController.getAllProduct);
    app.get("/api/product/:id", ProductController.getProduct);
    app.post("/api/product/new", ProductController.createProduct);
    app.put("/api/product/update/:id", ProductController.updateProduct);
    app.delete("/api/product/delete/:id", ProductController.deleteProduct);
}