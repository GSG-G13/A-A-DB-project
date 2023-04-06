const express = require('express');

const path = require('path');

const addZkir = require('../controllers/addZkir.js');
const getZkir = require('../controllers/getZkir.js');

const routers = express.Router();

routers.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
});

// routers.get('/azkar', (request, response) => {
//   response.sendFile(path.join(__dirname, '..', '..', 'public', 'azkar.html'));
// });

// post a new zkir
routers.post('/azkar/addZkir', addZkir);
routers.get('/azkar/getZkir', getZkir);

module.exports = routers;
