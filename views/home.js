var utils = require('../custom_modules/utils');

exports.home = function(request, response, url){
    utils.plainFileResponse('html/home.html', response);
}