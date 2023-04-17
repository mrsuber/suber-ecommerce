const router = require("express").Router();
const { auth, authorize } = require("../middleware/authMiddlerware");
const ProductCategoryCtr = require("../controller/productCategoryCtrl");
const fileUpload = require("../helpers/filehelper");
const helpers = require("../helpers/helpers");

// router.get('/categories', ProductCategoryCtr.getAllCategory);

router
  .route("/category/:id")
  .get(ProductCategoryCtr.getCategory);

// router.use(auth);


router
  .route("/category")
  // .use(auth)
  .post(
    auth,
    authorize('admin', 'superadmin'),
    fileUpload.uploadSingleImage, 
    ProductCategoryCtr.setUserId,
    helpers.setFile,
    ProductCategoryCtr.createCategory);
  

// router.use(authorize('admin', 'superadmin'));

router
  .route("/category/:id")
  // .use(auth)
  .patch( 
    auth,
    authorize('admin', 'superadmin'),
    fileUpload.uploadSingleImage, 
    helpers.setFile,
    ProductCategoryCtr.updateCategory)
  .delete(
    auth,
    authorize('admin', 'superadmin'),
    ProductCategoryCtr.deleteCategory);

module.exports = router;
