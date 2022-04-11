const router = require('express').Router();
const { 
  allCategorys,
  addCategory,
  updateCategory,
  deleteCategory
} = require('../controller/categoryController');





router.get('/getallcategorys', allCategorys)
router.post('/addnewcategory', addCategory)
router.put('/updateanycategory/:id', updateCategory)
router.delete('/deleteanycategory/:id', deleteCategory)


module.exports = router;