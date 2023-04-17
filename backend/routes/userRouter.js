const router = require('express').Router()
const {auth, authorize} = require('../middleware/authMiddlerware')
const {userCtrl} = require('../controller/userCtrl');
const userController = require('../controller/userCtrl');
const fileUpload = require('../helpers/filehelper');



// router.use(auth);

router.patch('/updateMe', 
  auth,
  fileUpload.uploadUserImage,
  fileUpload.resizeUserPhoto,
  userController.updateMe
);

router.get('/users', auth,userCtrl.getAllUsers) 
router.get('/search', auth, userCtrl.searchUser) 
router.get('/user/:id', auth, userCtrl.getUser) 
router.patch('/user', auth,userCtrl.updateUser) 
router.delete('/delete-user',auth, authorize('admin', 'superadmin'), userCtrl.deleteUser);

router.patch('/assign-role', auth, authorize('superadmin') , userController.assignRole);


module.exports = router
