const http = require('http');
const server = require('./services/server');

const PORT = process.env.PORT || 3000;

const app = http.createServer(server);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
