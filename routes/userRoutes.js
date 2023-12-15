const express = require('express');
const { getAllUsers, registerController, loginController, getHomepage } = require('../controllers/userControllers');

const router = express.Router()


//Homepage
router.get('/', getHomepage);

//get register page
// router.get('/register', registerController)


// create user
router.post('/register', registerController)

//get all users
router.get('/all-users', getAllUsers)

// login
router.post('/login', loginController)

module.exports = router;

