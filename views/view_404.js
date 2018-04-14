exports.view_404 = function(request, response, url){
    response.writeHead(404, "Requested resource not found",
        {
            'Content-Type': 'text/html'
        }
    );

    response.write(
        "You requested the URL: <b>" + url.path + "</b> that was not found."
    );
    response.end();
}