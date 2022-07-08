const express = require("express");
const {
    createProduct,
    product,
    userProducts,
    filterProducts,
    categoryProducts,
  } = require("../controllers/products");

  
const router = express.Router();

router.route("/").get(product);
router.route("/createProduct").post(createProduct);
router.route("/userProducts").post(userProducts);
router.route("/productList").post(filterProducts);
router.route("/productCategory").post(categoryProducts);



module.exports = router;