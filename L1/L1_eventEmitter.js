const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// Registering a listener for the 'event' event
myEmitter.on('event', () => {
  console.log('First listener');
});

myEmitter.on('event', () => {
  console.log('Second listener');
});

myEmitter.once('eventOnce', () => {
  console.log('This will only run once');
});

myEmitter.on('event2', (arg1, arg2) => {
  console.log(`Event with args: ${arg1}, ${arg2}`);
});

const callback = () => {
  console.log('Listener removed');
};

myEmitter.on('event3', callback);

// Emitting the 'event' event
myEmitter.emit('event');
myEmitter.emit('eventOnce');
myEmitter.emit('eventOnce');
myEmitter.emit('event2','test1','test2');
myEmitter.emit('event3');
myEmitter.removeListener('event3', callback);
myEmitter.emit('event3');