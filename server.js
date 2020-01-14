require('dotenv').config({
	path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const winston = require('winston');

const app = require('./src/app');

const port = process.env.SERVER_PORT;

app.listen(port, () => {
	winston.info({ message: `Running on port ${port}` });
});
