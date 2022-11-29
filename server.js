const { createServer } = require("node:http");

// Set host address and port
const host = 'localhost';
const port = 8080;

// This is a simple request listener
const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("Yeah, we are alive, for now...")
}

// Create the server instance with the request listener
const server = createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
