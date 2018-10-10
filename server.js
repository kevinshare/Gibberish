require('dotenv').config();
const port = process.env.PORT || 8082;
const path = require('path');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const http = require('http');

http.createServer((req, res) => {
  const { url } = req;
  if (url === '/') {
    fs.readFileAsync(path.join(__dirname, './client/dist/index.html'), 'utf8')
      .then((data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      })
      .catch(() => {
        res.writeHead(500);
        res.end();
      });
  } else if (url === '/bundle.js') {
    const stream = fs.createReadStream(path.join(__dirname, './client/dist/bundle.js'), 'utf8');
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
    stream.pipe(res);
  } else if (url === '/bundle-server.js') {
    const stream = fs.createReadStream(path.join(__dirname, './client/dist/bundle-server.js'), 'utf8');
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
    stream.pipe(res);
  } else if (url.match('.css')) {
    const stream = fs.createReadStream(path.join(__dirname, './client/dist/style.css'), 'utf8');
    res.writeHead(200, { 'Content-Type': 'text/css' });
    stream.pipe(res);
  } else if (url.startsWith('/favicon.ico')) {
    res.writeHead(404);
    res.end();
  }
}).listen(port);
