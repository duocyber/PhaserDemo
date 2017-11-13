demo.state2 = function(){};
demo.state2.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#88ff88';
		console.log('state2');

		addChangeStateEventListeners();
	},
	update: function(){}
}