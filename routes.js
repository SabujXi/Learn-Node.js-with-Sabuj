var home = require("./views/home").home;
var form = require("./views/form").form;
var process_form = require("./views/process_form").process_form;
var view_404 = require("./views/view_404").view_404;

var routes = [
    {
        pattern: '',
        handler: home
    },
    {
        pattern: 'form',
        handler: form
    },
    {
        pattern: 'submit-form',
        handler: process_form
    }
]




exports.routes = routes;
exports.view_404 = view_404;