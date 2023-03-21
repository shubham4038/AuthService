const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')
const userMiddleware = require('../middlewares/userMiddleware');

router.route('/signup').post(userMiddleware.validateUser,userController.signup);
router.route('/login').post(userMiddleware.validateUser,userController.logIn);
router.route('/isAdmin').get(userController.isAdmin)
router.route('/user/:id').delete(userController.deleteUser);

router.route('/isAuthenticated').get(userController.isAuthenticated)

module.exports = router;