const router = require('express').Router();
const {
  allUsers,
  addUser,
  updateUser,
  deleteUser
} = require('../controller/usersController');



router.get('/getallusers', allUsers)
router.post('/addnewuser', addUser)
router.put('/updateanyuser/:id', updateUser)
router.delete('/deleteanyuser/:id', deleteUser)


module.exports = router;