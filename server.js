//handles http requests
var http = require("http");

//endpoint of communication in the operating system
var PORT1 = 7000;
var PORT2 = 7500;

function handleRequestOne(request,response){
    response.end("I'm clean");
}
function handleRequestTwo(request,response){
    response.end("but I'm not a great flosser");
}

var server = http.createServer(handleRequestOne);
server.listen(PORT1, function(){
    console.log("Server listening on http://localhost:%s", PORT1);
});
server = http.createServer(handleRequestTwo);
server.listen(PORT2, function(){
    console.log("Server listening on http://localhost:%s", PORT2);
});