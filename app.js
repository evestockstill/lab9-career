require('dotenv').config();
const express = require('express');
const app = express();
const recipes = require('./routes/recipes');
// const events = require('./routes/events');
app.use(express.json());

app.use('/api/v1/recipes', recipes);
// app.use('/api/v1/events', events);

module.exports = app;
