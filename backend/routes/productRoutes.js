const router = require("express").Router();
const { auth, authorize } = require("../middleware/authMiddlerware");
const ProductCtrl = require("../controller/productCtrl");
const fileUpload = require("../helpers/filehelper");
const helpers = require("../helpers/helpers");

// router.get('/products', ProductCtrl.getAllProducts);

router
  .route("/product/:id")
  .get(ProductCtrl.getProduct);




router
  
  .route("/product")
  // .use(auth)
  .post(
    auth,
    authorize('admin', 'superadmin'),
    fileUpload.uploadSingleImage, 
    ProductCtrl.setUserId,
    helpers.setFile,
    ProductCtrl.createProduct);
  

// router.use(authorize('admin', 'superadmin'));

router
  .route("/product/:id")
  // .use(auth)
  .patch( 
    auth,
    authorize('admin', 'superadmin'),
    fileUpload.uploadSingleImage, 
    helpers.setFile,
    ProductCtrl.updateProduct)
  .delete(
    auth,
    authorize('admin', 'superadmin'),
    ProductCtrl.deleteProduct);

module.exports = router;
