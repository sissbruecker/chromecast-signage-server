const express = require('express');
const http = require('http');
const bodyparser = require('body-parser');

const display = require('./display');

let server;
const app = express();
app.use(bodyparser.json());

app.post('/display/show', async (req, res) => {
    try {
        await display.show(req.body);
    } catch (e) {
        console.error(e);
        res.status(500);
        return res.json({
            message: 'Could not start signage app',
            error: e
        });
    }

    res.status(200);
    res.json({
        message: 'Started signage app'
    });
});

function start(port) {
    server = http.createServer(app);
    server.listen(port);
}

module.exports = {
    start
};

