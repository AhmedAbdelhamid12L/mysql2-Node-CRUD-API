const connection = require('../../../configration/config');


const allCategorys = (req, res) => {
  connection.execute('SELECT * FROM category', (err, data) => {
    if (err) {
      res.json({ message: 'error', err });
    }
    else {
      res.json({ message: 'success', data })
    }
  })
}

const addCategory = (req, res) => {
  const { title , description } = req.body;
  connection.execute(`INSERT into category(title,description) VALUES ('${title}','${description}')`, (err, data) => {
    if(err) throw res.json({ message: 'error', err }); 
    res.json({ message: 'added success', data });
  })
}

const updateCategory = (req, res) => {
  const {id} = req.params;
  const { title , description } = req.body;
  const query = `UPDATE category set title = '${title}'  , description ='${description}' WHERE id=${id}`
  connection.execute(query , (err , data)=> {
    if(err) throw res.json({ message: 'error', err }); 
    res.json({ message: 'updated success', data });
  })
}

const deleteCategory = (req, res) => {
  const {id} = req.params;
  const query = `DELETE FROM category WHERE id = ${id}`
  connection.execute(query , (err , data)=> {
    if(err) throw res.json({ message: 'error', err }); 
    res.json({ message: 'deleted success', data });
  })
}


module.exports = {
  allCategorys,
  addCategory,
  updateCategory,
  deleteCategory
}