const connection = require('../../../configration/config');


const allProducts = (req, res) => {
  connection.execute('SELECT * FROM product', (err, data) => {
    if (err) {
      res.json({ message: 'error', err });
    }
    else {
      res.json({ message: 'success', data })
    }
  })
}

const addProduct = (req, res) => {
  const { title , description , price , createdBy , category } = req.body;
  connection.execute(`INSERT into product(title,description,price,createdBy,category) VALUES ('${title}','${description}','${price}', '${createdBy}' , ${category} )`, (err, data) => {
    if(err) throw res.json({ message: 'error', err }); 
    res.json({ message: 'added success', data });
  })
}

const updateProduct = (req, res) => {
  const {id} = req.params;
  const { title , description , price , category } = req.body;
  const query = `UPDATE product set title = '${title}'  , description ='${description}' , price = '${price}' , category = ${category}  WHERE id=${id}`
  connection.execute(query , (err , data)=> {
    if(err) throw res.json({ message: 'error', err }); 
    res.json({ message: 'updated success', data });
  })
}

const deleteProduct = (req, res) => {
  const {id} = req.params;
  const query = `DELETE FROM product WHERE id = ${id}`
  connection.execute(query , (err , data)=> {
    if(err) throw res.json({ message: 'error', err }); 
    res.json({ message: 'deleted success', data });
  })
}

//*******  get product By category *******//

const getProductByCategory = (req, res) => {
  const {id} = req.params;
  const query = `SELECT * FROM product INNER JOIN category ON product.category = category.id WHERE category = ${id}`
  connection.execute(query , (err , data)=> {
    if(err) throw res.json({ message: 'error', err }); 
    res.json({ message: 'success', data });
  })
}

//*******  get all user products By category *******//

const getUserByCategory = (req, res) => {
  const {id} = req.params;
  const query = `SELECT createdBy FROM product WHERE category = ${id}`
  connection.execute(query , (err , data)=> {
    if(err) throw res.json({ message: 'error', err }); 
    res.json({ message: 'success', data });
  })
}

//******* Cart Table  get Proudcts User Added *******//

const getProudctsUserAdded = (req, res) => {
  const {id} = req.params;
  const query = `SELECT createdBy , title , category FROM product INNER JOIN user ON product.createdBy = user.id WHERE createdBy = ${id}`
  connection.execute(query , (err , data)=> {
    if(err) throw res.json({ message: 'error', err }); 
    res.json({ message: 'success', data });
  })
}



module.exports = {
  allProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductByCategory,
  getUserByCategory,
  getProudctsUserAdded
}