const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });   
    res.end('Hello, World!');
  }
});

const PORT = 3069;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});