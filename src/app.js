const express = require('express');
const morgan = require('morgan');
const winston = require('../src/config/winston');
const routes = require('./routes/routes');

const app = express();

app.use(express.json());
app.use(morgan('combined', { stream: winston.stream }));
app.use(routes());

module.exports = app;
