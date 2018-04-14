var url = require('url');
var routes = require("../routes").routes;

exports.serveRequests = function(request, response){
    const url_comps = url.parse(request.url, true);
    console.log(request.method + " " + request.url);

    var path = url_comps.pathname;
    if (path.charAt(0) === '/'){
        path = path.slice(1);
    }

    for (var i = 0; i < routes.length; i++)
    {
        var router = routes[i];
        var pattern = router.pattern;
        var handler = router.handler;
        
        if (pattern.charAt(0) === '/'){
            pattern = pattern.slice(1);
        }

        if (path === pattern){
            handler(request, response, url_comps);
            break;
        }
    };
};
