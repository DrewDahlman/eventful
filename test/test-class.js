var Eventful = require('../eventful');

module.exports = class TestClass extends Eventful {
	
	/*
	------------------------------------------
	| constructor:void (-)
	|
	| Construct.
	------------------------------------------ */
	constructor(){
		super();
	}

	/*
	------------------------------------------
	| triggerFoo:void (-)
	|
	| Internally trigger event.
	------------------------------------------ */
	triggerBar(){
		this.trigger('bar', {foo: 0, bar: 1} );
	}
}