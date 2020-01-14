const express = require('express');
const morgan = require('morgan');
const winston = require('../src/config/winston');

const app = express();

app.use(express.json());
app.use(morgan('combined', { stream: winston.stream }));

module.exports = app;
