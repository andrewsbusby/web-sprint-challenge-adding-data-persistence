const express = require('express');
const resourceRouter = require('./resource/router');

const server = express();

server.use(express.json());
server.use('/api/resource', resourceRouter);

module.exports = server;