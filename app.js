(function(){
	var app = angular.module('store',[]);

	app.controller('StoreController',function(){
		this.product = bike;
	});

var bike = {
	name: "BAD BOY",
	type: "Urban/Fintess",
	price: 1840,
	description: "The Bad Boy's stealth-fighter looks and street-fighter performance make it a fast, stylish and functional partner-in-crime for all your urban adventures.",
    canPurchase: true,
    soldOut: false

}



})();
