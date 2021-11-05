const express = require('express');

const resourceRouter = require('./resource/router');
const projectRouter = require('./project/router')

const taskRouter = require('../api/task/router')

const server = express()

server.use(express.json())

server.use('/api/resources', resourceRouter)

server.use('/api/projects', projectRouter)

server.use('/api/tasks', taskRouter)

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
