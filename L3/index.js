const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  // Master process that distributes work to child processes
  console.log(`Master ${process.pid} is running`);

  // Fork workers equal to the number of CPU cores
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  // Worker process that handles HTTP requests
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Hello World from Worker ${process.pid}`);
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}