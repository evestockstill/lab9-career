/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const dotenv = require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.static('./public'));
app.use('/api/v1/recipes', require('../lib/routes/recipes'));
app.use('/api/v1/events', require('../lib/routes/events'));

module.exports = app;
