var http = require("http");



http.createServer(function(request, response){

    response.writeHead(200, {"COntent-type": "text/plain"});

    response.write("Hello world");

    response.end();

}).listen(3000);