const express = require('express');
const cors = require('cors');
const monsoose = require('mongoose');
const routes = require('./routes');

const server = express();

monsoose.connect('mongodb+srv://dev-test:Password1@cluster0-2edj1.mongodb.net/oministack8?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(3333);