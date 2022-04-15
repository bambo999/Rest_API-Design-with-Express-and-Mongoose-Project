const express = require('express');
const router = express.Router();

const {
  storeTask,
  fetchAllTask,
  getSingleTask,
  updateTask,
  deleteSingleTask,
} = require('../controller/task');


//Task add data
router.post('/task', storeTask )

//Fetch Task data
router.get('/task', fetchAllTask )


//Get a specific single Task data
router.get('/task/:id', getSingleTask )


//Update Task data
router.patch('/task/:id', updateTask )


//Delete a specific Task Data
router.delete('/task/:id', deleteSingleTask )


module.exports = router;