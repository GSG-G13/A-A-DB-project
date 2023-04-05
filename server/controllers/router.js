const express = require('express');

const path = require('path');

const routers = express.Router();

routers.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
});

routers.get('/public/azkar.html', (request, response) => {
  response.sendFile(path.join(__dirname, '..', '..', 'public', 'azkar.html'));
});

module.exports = routers;
