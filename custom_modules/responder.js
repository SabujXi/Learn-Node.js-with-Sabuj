var fs = require('fs');

exports.serveRequests = function(request, response){
    fs.readFile('html/home.html', function (error, file_data){
        if (error){
            response.writeHead(500, 
                {
                    'Content-Type': 'text/html'
                }
            );
            response.end("<b>Something Went Terribly Wrong</b>");    
        }else{
            response.writeHead(200, 
                {
                    'Content-Type': 'text/html'
                }
            );
            response.end(file_data);
        }    
    });
};