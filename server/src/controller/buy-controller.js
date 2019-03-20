const controller = {};

controller.buy = (req, res) => {
  
  const data = req.body;
  console.log("Data",data)
  console.log("Req",req.body )

  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO buy set ?', data, (err, buy) => {
    if(err){
      res.json({"mensage":err,"status":false});
    } 
      res.json({"mensage":"Buy","status":true})
    })
  }) 
}

module.exports = controller;