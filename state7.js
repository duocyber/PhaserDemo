demo.state7 = function(){};
demo.state7.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#123456';
		console.log('state7');
		
		addChangeStateEventListeners();		
	},
	update: function(){}
}