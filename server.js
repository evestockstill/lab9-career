require('dotenv').config();
require('./utils/connect')();
require('colors');
require('morgan');
require('cors');

const app = require('./app');

app.get('/', (req, res) => {
  res.send('hello from recipe');
});



const PORT = process.env.PORT || 7890;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Started on ${PORT}`.yellow.bold);
});
