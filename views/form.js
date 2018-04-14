var utils = require('../custom_modules/utils');

exports.form = function(request, response, url){
    utils.plainFileResponse('html/form.html', response);
}