var utils = require('../custom_modules/utils');

exports.process_form = function(request, response, url){
    utils.handleSimpleForm(url, request, response);
}
