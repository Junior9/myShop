const controller = {};

controller.create = (req, res) => {
  const data = req.body;
  console.log(data)

  /*
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO customer set ?', data, (err, customer) => {
    if(err){
		res.json(err);
	}
    console.log(customer)
    res.redirect('/');
    })
  }
  */

};

controller.update = (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
  /*
  req.getConnection((err, conn) => {
    conn.query('UPDATE customer set ? where id = ?', [newCustomer, id], (err, rows) => {
      res.redirect('/');
    });
  });
  */

};

controller.delete = (req,res) =>{
	const { id } = req.params;

	/*
	req.getConnection((err, connection) => {
    	connection.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
      		res.redirect('/');
    	});
 	});

 	*/
};


controller.list = (req,res) =>{

	/*
	req.getConnection((err,connection) => {
		connection.query('SELECT * FROM customer',(err,customers) =>{
			if(err){
				res.json(err);
			}
			console.log(customers);
			res.render('customers',{
				data:customers
			});

		})
	});
	*/
};



module.exports = controller;