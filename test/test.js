var assert = require('assert'),
		TestClass = require('./test-class');

var EventfulTestClass;

describe('Eventful', function(){

	// Create
	describe('Create', function(){
		it( 'should create test class to run against', function(){
			EventfulTestClass = new TestClass();
			assert.equal('object', typeof EventfulTestClass);
		});
	});

	// Events & Core Eventful
	describe('Events', function(){

		it( 'Should have no events', function(){
			assert.equal(0, EventfulTestClass._events.length);
		});

		it( 'Should validate event type as a string', function(){
			assert.throws( function(){
				EventfulTestClass.on(test-event);
			}, Error, "Event type should be string.")
		});

		it( 'Should validate callback as a function', function(){
			assert.throws( function(){ 
				EventfulTestClass.on('test-event')
			}, Error, "Callback should be a function.");
		});

		it( 'Should attach an event', function(){
			assert.doesNotThrow( function(){
				EventfulTestClass.on('foo', function(event){ });
			}, Error, "");
		});

		it( 'Should attach and trigger event with data', function(){
				EventfulTestClass.on('bar', function(event){
					assert.strictEqual(1, event.bar);
					assert.strictEqual(0, event.foo);
				});

				// Trigger event
				EventfulTestClass.triggerBar();
		});

		it( 'Should detach event', function(){
			assert.doesNotThrow( function(){
				EventfulTestClass.off('bar');
			}, Error, "");
		});

	});

});