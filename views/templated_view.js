var render = require('../custom_modules/templating').render;

exports.templated_view = function(request, response, url){
    render('my_template.html', {
        random_no: Math.random() * 100,
        now: Date.now() * Math.random()
    },
    function(data){
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        response.end(data);
    }
    );
}