var fs = require('fs');
var url = require('url');

function plainFileResponse(file_name, response){
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

function handleSimpleForm(url_comps, request, response){
    var params = url_comps.query;
    var name = params['name'];
    var profession = params['profession'];
    var result = "Profession: " + profession + "\n" + "Name: " + name + "\n"
    response.writeHead(200, "All is well",
                {
                    'Content-Type': 'text/plain'
                }
            );
            response.write(result, "utf8");
            response.end();
}

exports.serveRequests = function(request, response){
    const url_comps = url.parse(request.url, true);
    // url data printing
    console.log("Requesting URL: " + request.url);
    console.log("Protocol Used: " + url_comps.protocol);
    console.log("Hostname: " + url_comps.hostname);
    console.log("Pathname: " + url_comps.pathname);
    console.log("Method used: " + request.method);
    console.log("\n");
    // < url data printing
    if (url_comps.pathname === "/form.html"){
        plainFileResponse('html/form.html', response);
    }else if(url_comps.pathname === "/submit-form"){
        handleSimpleForm(url_comps, request, response);
    }else{
        plainFileResponse('html/home.html', response);
    }
};