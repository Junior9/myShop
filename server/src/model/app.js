const app = require('express');
const morgan = require("morgan");
//import routers
const loginRouter   = require('../router/login-router');
const procuctRouter = require('../router/product-router');

//middlewares
app.use(morgan('dev')); 

//routes//
app.use('/login',loginRouter);
app.use('/product/',procuctRouter);
	
//start serve
app.listen(3000, () =>{
	console.log("Serve up");
});