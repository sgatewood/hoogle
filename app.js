//node entry point

var http = require("http");

http.createServer(function(req, res){
    res.writeHead(200, {
        'Content-Type' : 'text/plain' 
    });
    res.end('hoogle testing page!');
}).listen(3000);

console.log('Server running at localhost: 3000 !');

