const router = require('express').Router();
const mainController=require('../Controllers/mainController');
const upload = require('../Controllers/fileuploadController')

router.route('/users')
.post(upload.single('profilePicture'),mainController.createUser)
.get(mainController.getAllUsers);

router.route('/users/:userId')
.get(mainController.getByIdUser)
.put(mainController.updateUser)
.delete(mainController.deleteUser);

router.route('/users/upload')
.post(mainController.uploadFiles)


module.exports=router