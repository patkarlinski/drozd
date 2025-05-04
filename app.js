const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;
const publicDir = path.join(__dirname, 'public');

const server = http.createServer((req, res) => {
  let filePath = path.join(publicDir, req.url === '/' ? 'index.html' : req.url);
  const extname = path.extname(filePath);

  // Ustal MIME typ
  const mimeTypes = {
    '.html': 'text/html',
    '.css':  'text/css',
    '.js':   'text/javascript',
    '.png':  'image/png',
    '.jpg':  'image/jpeg',
    '.ico':  'image/x-icon',
  };

  const contentType = mimeTypes[extname] || 'application/octet-stream';

  // Odczytaj plik i wyślij odpowiedź
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(port, () => {
  console.log(`Serwer działa na http://localhost:${port}`);
});
