/* eslint-disable no-undef */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/api/v1/recipes', require('./routes/recipes'));
app.use('/api/v1/events', require('./routes/events'));

module.exports = app;
