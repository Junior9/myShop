const controller = {};

controller.get=(req,res)=>{
  const { id } = req.params;
  req.getConnection((err,connection) => {
    connection.query('SELECT * FROM product WHERE id = ?',[id],(err,product) =>{
      if(err){
        res.json(err);
      }
      console.log(product);
      res.json(product);
    })
  });
}

controller.create = (req, res) => {

  const data = req.body;
  console.log("Data",data)
  console.log("Req",req.body )
  
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO product set ?', data, (err, product) => {
    if(err){
      res.json({"mensage":err});
    } 
    console.log(product)
    })
  })
  
}

controller.update = (req, res) => {
  const { id } = req.params;
  const product = req.body;
  
  req.getConnection((err, conn) => {
    conn.query('UPDATE product set ? where id = ?', [product, id], (err, rows) => {
      if(err){
        res.json({"mensage":err,"status":false});
      } 
      res.json({"mensage":"Update Ok","status":true});
    });
  });
  

};

controller.delete = (req,res) =>{
	const { id } = req.params;
	req.getConnection((err, connection) => {
    	connection.query('DELETE FROM product WHERE id = ?', [id], (err, rows) => {
        if(err){
          res.json({"mensage":err,"status":false});
        } 
        res.json({"mensage":"Product Deleted","status":true});
    	});
 	});
};

controller.list = (req,res) =>{
	req.getConnection((err,connection) => {
		connection.query('SELECT * FROM product',(err,prducts) =>{
			if(err){
				res.json({"mensage":err});
			}
			console.log(prducts);
			res.json(prducts);
		})
	});
};

module.exports = controller;