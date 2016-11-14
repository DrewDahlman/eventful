Eventful
================
A helper class for events.

## Use
<pre>
let Eventful = require('eventful');

class MyClass extends Eventful{
	constructor(){
		super();
	}
}
</pre>

### Listen:
`_myObject.on('some-event', (event) => console.log(event) );`

### Trigger:
`_myObject.trigger('some-event', {foo: bar, fizz: buzz});`
`_myObject.trigger('some-other-event');`

### Detach:
`_myObject.off('some-event');`

With Eventful you can attach listeners to any object that you have access to and transfer data between the caller and the object.

## Returns
Will return an object with the event and any data associate with that event.
<pre>
{
	event: 'some-event',
	data: {}
}
</pre>
