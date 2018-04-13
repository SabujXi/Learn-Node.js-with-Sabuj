var http = require('http');
var fs = require('fs');

http.createServer(
    function (request, response) {
        fs.readFile('home.html', function (error, file_data){
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
    })
    .listen(5000);