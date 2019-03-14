const productService = {};

productService.total = (products) => {
	total = 0;
	for (index in products) {
  		total += products[index].price;
	}
	return total;
}


module.exports = productService;