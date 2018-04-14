var fs = require('fs');

exports.serveRequests = function(request, response){
    fs.readFile('html/home.html', function (error, file_data){
        if (error){
            response.writeHead(500, "Internal Server Error",
                {
                    'Content-Type': 'text/html'
                }
            );
            response.write("<b>Something Went Terribly Wrong</b>", "utf8");
            response.end();    
        }else{
            response.writeHead(200, "All is well",
                {
                    'Content-Type': 'text/html'
                }
            );
            response.write(file_data, "utf8");
            response.end();
        }    
    });
};