const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);

server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));