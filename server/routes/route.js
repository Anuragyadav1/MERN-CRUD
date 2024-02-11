const express = require('express')
const userController = require('../controller/user-controller.js')
//  console.log(userController)

const router = express.Router()

router.post('/add',userController.addUser)
// router.post('/delete/:id',userController.deleteUser)
// router.post('/update',userController.updateUser)
router.get('/all',userController.getAllUsers)
router.get('/:id',userController.getUser)
router.put('/edit/:id',userController.editUser)
router.delete('/delete/:id',userController.deleteUser)


module.exports = router