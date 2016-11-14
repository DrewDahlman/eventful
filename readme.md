Eventful
================
A helper class for events.

[![Build Status](https://travis-ci.org/DrewDahlman/eventful.svg?branch=master)](https://travis-ci.org/DrewDahlman/eventful)

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
	ev_type: 'some-event',
	data: {}
}
</pre>

## Methods
`on('event-type')`: Attach an event (string)
`off('event-type')`: Detaches an event that has been attached (string)
`trigger('event-type', {})`: Triggers an event (string, data)

