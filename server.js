require('dotenv').config({
	path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const app = require('./src/app');

const port = process.env.SERVER_PORT;

app.listen(port, () => {
	console.info(`Running on port ${port}`);
});
