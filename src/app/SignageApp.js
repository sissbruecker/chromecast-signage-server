const util = require('util');
const castv2Client = require('castv2-client');
const Application = castv2Client.Application;
const SignageController = require('./SignageController');

function SignageApp(client, session) {
    Application.apply(this, arguments);

    this.signage = this.createController(SignageController);

    this.signage.on('status', onstatus);

    const self = this;

    function onstatus(status) {
        self.emit('status', status);
    }
}

SignageApp.APP_ID = '1DFB1797';

util.inherits(SignageApp, Application);

SignageApp.prototype.load = function (signageData, options, callback) {
    this.signage.load.apply(this.signage, arguments);
};

module.exports = SignageApp;
