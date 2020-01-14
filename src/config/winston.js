const winston = require('winston');

const logger = new winston.createLogger({
	transports: [
		new winston.transports.Console({
			format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
		}),
		new winston.transports.File({
			level: 'debug',
			format: winston.format.combine(winston.format.colorize(), winston.format.json()),
			filename: 'logs/app.log',
		}),
	],
	exitOnError: false,
});

logger.stream = {
	write(message) {
		// use the 'info' log level so the output will be picked up by both transports (file and console)
		logger.info(message);
	},
};

module.exports = logger;
