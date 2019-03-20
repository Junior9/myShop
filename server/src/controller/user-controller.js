const controller = {};

controller.get = (req,res)=>{
  const { id } = req.params;
  req.getConnection((err,connection) => {
    connection.query('SELECT * FROM user WHERE id = ?',[id],(err,users) =>{
      if(err){
        res.json(err);
      }
      console.log(users);
      res.json(users);
    })
  });
}

controller.list = (req,res)=>{

  req.getConnection((err,connection) => {
    connection.query('SELECT * FROM user',(err,users) =>{
      if(err){
        res.json(err);
      }
      console.log(users);
      res.json(users);
    })
  });
}

controller.login = (req,res)=>{
  const data = req.body;
  console.log(data.email);

  req.getConnection((err,connection) => {
    connection.query('SELECT * FROM user WHERE email = "'+data.email+'" AND password = "'+data.password+'"',(err,user) =>{
      if(err){
        res.json(err);
      }
      console.log(user);
      res.json(user);
    })
  });
}

controller.create = (req, res) => {
  const data = req.body;
  console.log("Data",data)
  console.log("Req",req.body )
  
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO user set ?', data, (err, user) => {
    if(err){
		  res.json(err);
	  } 
    console.log(user)
    })
  })
};

controller.delete = (req,res)=>{
  const { id } = req.params;
  req.getConnection((err, connection) => {
      connection.query('DELETE FROM user WHERE id = ?', [id], (err, rows) => {
          //res.json('/');
      });
   });
}

controller.update = (req, res) => {
  const { id } = req.params;
  const user = req.body;
  console.log(user);

  req.getConnection((err, conn) => {
    conn.query('UPDATE user set ? where id = ?', [user, id], (err, rows) => {
      //res.redirect('/');
    });
  });
};

module.exports = controller;