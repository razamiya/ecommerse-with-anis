const Product = require("../models/productModels");

/**
 * @name GET
 * @access Admin
 * @desc : "Get All Product"
 */
exports.getAllProducts = async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({
    message: "All Product Successfull",
    products,
  });
};

/**
 * @name GET
 * @access Admin
 * @desc : "Get Single Product"
 */
exports.singleProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      message: "Opppsss Cannot get product",
    });
  }

  product = await Product.findById(req.params.id);
  res.status(200).json({
    message: "Single Product Get successfull",
    product,
  });
};

/**
 * @name POST
 * @access Admin
 * @desc : "Create Product"
 */
exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    message: "Product Create Successfull",
    product,
  });
};

/**
 * @name PUT
 * @access Admin
 * @desc : "Update Product"
 */
exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      message: "Opppsss Cannot get product",
    });
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    message: "Product Updated successfull",
    product,
  });
};

/**
 * @name DELET
 * @access Admin
 * @desc : "Delete Single Product"
 */
exports.deleteProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      message: "Opppsss Cannot get product",
    });
  }

  product = await Product.findByIdAndDelete(req.params.id);
  res.status(200).json({
    message: "Product Delete successfull",
    product,
  });
};
