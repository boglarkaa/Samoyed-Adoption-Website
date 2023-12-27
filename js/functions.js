function calculateTotal(service) {
	console.log(service);
	price = 0.0;
	for (p of service.package.prices) {
		price += p;
	}
	console.log(price);
	return price;
}
