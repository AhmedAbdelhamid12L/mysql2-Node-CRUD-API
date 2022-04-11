const express = require('express');
const app = express();
const usersRoutes = require('./local_modules/users/routes/usersRoutes.js');
const productRoutes = require('./local_modules/product/routes/productRoutes.js');
const categoryRoutes = require('./local_modules/category/routes/categoryRoutes.js');



app.use(express.json());

app.use(usersRoutes);
app.use(productRoutes);
app.use(categoryRoutes);



app.listen(5000, () => { console.log('App listening in port 5000!') });