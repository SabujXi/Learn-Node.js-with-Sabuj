exports.globalo = function(request, response, url){
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    var result = "";
    result += "__filename: " + __filename + "\n";
    result += "__dirname: " + __dirname + "\n";
    response.end(result, "utf8");
}