var http = require('http');
var responder = require('./custom_modules/responder');

http.createServer(responder.serveRequests)
    .listen(5000);