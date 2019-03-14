const productService = require("../service/productService");
const expect = require('expect');


it('Total price of list of products is : 50',()=>{
	var total= productService.total(products);
	expect(total).toBe(50);
})