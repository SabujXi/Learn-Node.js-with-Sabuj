var fs = require('fs');

exports.plainFileResponse = function plainFileResponse(file_name, response){
    fs.readFile(file_name, function (error, file_data){
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
}

exports.handleSimpleForm = function handleSimpleForm(url_comps, request, response){
    var params = url_comps.query;
    var name = params['name'];
    var profession = params['profession'];
    var result = "Profession: " + profession + "\n" + "Name: " + name + "\n";
    response.writeHead(200, "All is well",
        {
            'Content-Type': 'text/plain'
        }
    );
    response.write(result, "utf8");
    response.end();
    
}