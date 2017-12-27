const util = require('util');
const castv2Client = require('castv2-client');
const RequestResponseController = castv2Client.RequestResponseController;

function SignageController(client, sourceId, destinationId) {
    RequestResponseController.call(this, client, sourceId, destinationId, 'urn:x-cast:com.google.cast.chromecast.signage');
    this.once('close', onclose);
    const self = this;

    function onclose() {
        self.stop();
    }
}

util.inherits(SignageController, RequestResponseController);

SignageController.prototype.load = function (signageData, options, callback) {

    this.request(signageData, function (err) {
        if (err) return callback(err);
        callback(null);
    });
};

module.exports = SignageController;
