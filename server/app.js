const express = require('express');

const { join } = require('path');
const router = require('./routes');

const app = express();

app.use(express.static(join(__dirname, '..', 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('port', process.env.PORT || 5510);

app.use(router);

module.exports = app;
