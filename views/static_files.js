var fs = require("fs");

exports.static_files = function(request, response, url){
    var pathname = url.pathname;
    if (pathname.charAt(0) === '/'){
        pathname = pathname.slice(1);
    }
    var file_name = pathname.slice("static/".length);
    file_name = "static/" + file_name;

    var stream = fs.createReadStream(file_name);
    stream.on('data', function(data){
        response.write(data);
    }).on('end', function(){
        response.end();
    })

}