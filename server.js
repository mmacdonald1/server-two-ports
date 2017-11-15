//handles http requests
var http = require("http");

//endpoint of communication in the operating system
var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest(request,response){
    response.end("it works!! Path Hit: " + request.url);
}

var server = http.createServer(handleRequest);
server.listen(PORT1, function(){
    console.log("You are smart. Server listening on http://localhost:%s", PORT1);
});

server.listen(PORT2, function(){
    console.log("But you are messy. Server listening on http://localhost:%s", PORT2);
});