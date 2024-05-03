function handleRequest(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, world!2\n');
  }
  
  module.exports = handleRequest;
  
