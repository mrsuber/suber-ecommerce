const router = require('express').Router()
const {auth, authorize} = require('../middleware/authMiddlerware')
const {userCtrl} = require('../controller/userCtrl');
const userController = require('../controller/userCtrl');
const fileUpload = require('../helpers/filehelper');



router.use(auth);

router.patch('/updateMe', 
  fileUpload.uploadUserImage,
  fileUpload.resizeUserPhoto,
  userController.updateMe
);

router.get('/users', userCtrl.getAllUsers) 
router.get('/search',  userCtrl.searchUser) 
router.get('/user/:id',  userCtrl.getUser) 
router.patch('/user', userCtrl.updateUser) 
router.delete('/delete-user', authorize('admin', 'superadmin'), userCtrl.deleteUser);

router.patch('/assign-role', auth, authorize('superadmin') , userController.assignRole);


module.exports = router
