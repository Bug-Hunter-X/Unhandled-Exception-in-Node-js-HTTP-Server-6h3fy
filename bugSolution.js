const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
}) .on('error', err => {
  if (err.code === 'EADDRINUSE') {
    console.error('Port 8080 is already in use. Please choose another port.');
    process.exit(1);
  } else {
    console.error('An unexpected error occurred:', err);
    process.exit(1);
  }
});