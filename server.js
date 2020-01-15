require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});
const logger = require('./src/config/winston');
const app = require('./src/app');

const port = process.env.SERVER_PORT;

app.listen(port, () => {
  logger.info({ message: `Running on port ${port}` });
});
