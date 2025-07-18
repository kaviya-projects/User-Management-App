// server.js
const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  console.log(`📡 ${req.method} ${req.url}`);
  next();
});

server.use(router);

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`🚀 JSON Server running at http://localhost:${PORT}`);
});
