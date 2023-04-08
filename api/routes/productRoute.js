const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  singleProduct,
  deleteProduct,
} = require("../controllers/productController");

// Init Router
const router = express.Router();

// Create Router
router.route("/product").get(getAllProducts);
router.route("/product/new").post(createProduct);
router
  .route("/product/:id")
  .put(updateProduct)
  .get(singleProduct)
  .delete(deleteProduct);

// module export
module.exports = router;
