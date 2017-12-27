const server = require('./src/server');

// Init and log config
const config = require('dotenv').config().parsed;

console.log('Chromecast Signage Server configuration:');
Object.keys(config).forEach(key => {
    console.log(`\t${key}: ${config[key]}`);
});

// Start server
server.start(process.env.CHROMECAST_SIGNAGE_SERVER_PORT);

console.log('Chromecast Signage Server started');

