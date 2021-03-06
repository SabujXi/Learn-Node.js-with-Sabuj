var home = require("./views/home").home;
var form = require("./views/form").form;
var process_form = require("./views/process_form").process_form;
var view_404 = require("./views/view_404").view_404;
var static_files = require("./views/static_files").static_files;
var globalo = require("./views/globalo").globalo;
var templated_view = require("./views/templated_view").templated_view;

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
    },
    {
        pattern: 'static/',
        handler: static_files 
    },
    {
        pattern: 'globalo',
        handler: globalo
    },
    {
        pattern: 'templated_view',
        handler: templated_view
    }
]

exports.routes = routes;
exports.view_404 = view_404;