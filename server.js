require('dotenv').config();
require('./lib/utils/connect')();

require('morgan');
require('cors');

const app = require('./public/app');


const PORT = process.env.PORT || 7890;


app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Started on ${PORT}`);
});
