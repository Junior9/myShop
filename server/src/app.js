const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const cors = require("cors");	
const app = express();

//import routers
const userRoute = require('./router/user-router');
const productRoute = require('./router/produtct-router');
const buyRoute = require('./router/buy-router');

//settings
app.set('port',process.env.PORT || 3000);
app.use(cors());

//middlewares
app.use(morgan('dev')); 
app.use(myConnection(mysql,{
	host:'localhost',
	user:'root',
	password:'root',
	port:3306,
	database: 'node-loja'
},'single'));

app.use(express.urlencoded({extended:false}));

//routes
app.use('/api/user',userRoute);
app.use('/api/product',productRoute);
app.use('/api/buy',buyRoute);

//static files (img,javascript,css ,...)
app.set(express.static(path.join(__dirname,'public')));

//start serve
app.listen(3000, () =>{
	console.log("Serve up");
});