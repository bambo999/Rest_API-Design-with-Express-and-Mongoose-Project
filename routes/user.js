const express = require('express');
const router = express.Router();

const {
  storeUser,
  fetchAllUser,
  getSingleUser,
  updateUser,
  deleteSingleUser,
  login,
} = require('../controller/user');

//User add data (add data to user)
router.post('/user', storeUser );

//create user login
router.post('/user/login', login );

//Fetch User data
router.get('/user', fetchAllUser );


//Get a specific User data
router.get('/user/:id', getSingleUser );


//Update User data
router.patch('/user/:id', updateUser );

//Delete a specific User Data
router.delete('/user/:id', deleteSingleUser);


module.exports = router;
