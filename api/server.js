const express = require('express');
const resourceRouter = require('./resource/router');
const taskRouter = require('./task/router')
const projectRouter = require('./project/router')

const server = express();

server.use(express.json());
server.use('/api/resource', resourceRouter);
server.use('/api/task', taskRouter);
server.use('/api/project', projectRouter);

module.exports = server;