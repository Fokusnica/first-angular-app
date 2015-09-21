(function(){
	var app = angular.module('store',[]);

	app.controller('StoreController',function(){
		this.products = bikes;
	});

var bikes = [
{
	name: "BAD BOY",
	type: "Urban/Fintess",
	price: 1840,
	description: "The Bad Boy's stealth-fighter looks and street-fighter performance make it a fast, stylish and functional partner-in-crime for all your urban adventures.",
    canPurchase: true,
    soldOut: false,
    images: [
    {
    	full: 'bad_boy1.jpg',
    	thumb: 'bad_boy2.jpg'
    }
    ]

},
{
    name: "JEKYLL 27.5",
	type: "Mountain",
	price: 7990,
	description: "Jekyll's two-bikes-in-one split personalities let you love the climbs and KILL the descents.",
    canPurchase: true,
    soldOut: false,
    images: [
    {
    	full: 'jekill1.jpg',
    	thumb: 'jekill2.jpg'
    }
    ]

}
];


})();
