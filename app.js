var http=require('http');
var server=http.createServer(function(request,response){
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.end("Raspi ant000 heisst Dich Willkommen, Amos und Nils\n");
});
server.listen(8000);
console.log("Server running at http://127.0.0.1:8000/");
