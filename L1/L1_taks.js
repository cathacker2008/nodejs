setTimeout(() => {
    console.log(1,'Macrotask: setTimeout');
}, 0);

setImmediate(() => {
    console.log(2,'Macrotask: setImmediate');
});

process.nextTick(() => {
    console.log(3,'Microtask: process.nextTick');
});

Promise.resolve().then(() => {
    console.log(4,'Microtask: Promise');
});

console.log(5,'Main thread execution');