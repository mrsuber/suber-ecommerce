const router = require("express").Router();
const ProductCategoryCtr = require("../controller/productCategoryCtrl");
const ProductCtrl = require("../controller/productCtrl");

router.get('/categories', ProductCategoryCtr.getAllCategory);
router.get('/products', ProductCtrl.getAllProducts);

module.exports = router;