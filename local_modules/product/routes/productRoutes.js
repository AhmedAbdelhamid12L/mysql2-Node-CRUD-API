const router = require('express').Router();
const { 
  allProducts, 
  addProduct, 
  updateProduct, 
  deleteProduct,
  getProductByCategory,
  getUserByCategory,
  getProudctsUserAdded
} = require('../controller/productController');





router.get('/getallproducts', allProducts)
router.post('/addnewproduct', addProduct)
router.put('/updateanyproduct/:id', updateProduct)
router.delete('/deleteanyproduct/:id', deleteProduct)
router.get('/getproductbycategory/:id', getProductByCategory)
router.get('/getuserbycategory/:id', getUserByCategory)
router.get('/getproudctsuseradded/:id', getProudctsUserAdded)


module.exports = router;