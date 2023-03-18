const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')
const userMiddleware = require('../middlewares/userMiddleware');

router.route('/user').post(userMiddleware.validateUser,userController.createUser);
router.route('/user/:id').delete(userController.deleteUser);

module.exports = router;