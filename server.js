require('dotenv').config();
require('./lib/utils/connect')();
require('colors');


const app = require('./lib/app');

app.get('/', (req, res) => {
  res.send('hello from recipe');
});



const PORT = process.env.PORT || 7890;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Started on ${PORT}`.yellow.bold);
});
