setTimeout(() =>console.log(1));
new Promise(resolve => {
    console.log(2);
    resolve();
    console.log(3);
}).then(() => {
    console.log(4);
    process.nextTick(() => {
        console.log(5);
    });
})
console.log(6);