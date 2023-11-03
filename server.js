const http = require('http');
const opn = require('opn'); // Import the 'opn' package

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('Your Name: HARSHINI'); // Replace '[Your Name]' with your actual name
});

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  
  // Automatically open a web browser with your server URL
  const serverUrl = `http://localhost:${PORT}`;
  opn(serverUrl);
});
