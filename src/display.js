const { promisify } = require('util');
const SignageApp = require('./app/SignageApp');
const device = require('./device');

async function show(signageData) {
    const signageApp = await device.getApp(SignageApp);
    const signageLoad = promisify(signageApp.load.bind(signageApp));

    await signageLoad(signageData, {});
}

module.exports = {
    show
};

