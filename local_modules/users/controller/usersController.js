const connection = require('../../../configration/config');


const allUsers = (req, res) => {
  connection.execute('SELECT * FROM user', (err, data) => {
    if (err) {
      res.json({ message: 'error', err });
    }
    else {
      res.json({ message: 'success', data })
    }
  })
}

const addUser = (req, res) => {
  const { userName , email , password , phone } = req.body;
  connection.execute(`INSERT into user(userName,email,password,phone) VALUES ('${userName}','${email}','${password}', ${phone} )`, (err, data) => {
    if(err) throw res.json({ message: 'error', err }); 
    res.json({ message: 'added success', data });
  })
}

const updateUser = (req, res) => {
  const {id} = req.params;
  const { userName , email , password , phone } = req.body;
  const query = `UPDATE user set userName = '${userName}'  , email ='${email}' , password = '${password}' , phone = ${phone}  WHERE id=${id}`
  connection.execute(query , (err , data)=> {
    if(err) throw res.json({ message: 'error', err }); 
    res.json({ message: 'updated success', data });
  })
}

const deleteUser = (req, res) => {
  const {id} = req.params;
  const query = `DELETE FROM user WHERE id = ${id}`
  connection.execute(query , (err , data)=> {
    if(err) throw res.json({ message: 'error', err }); 
    res.json({ message: 'deleted success', data });
  })
}


module.exports = {
  allUsers,
  addUser,
  updateUser,
  deleteUser
}