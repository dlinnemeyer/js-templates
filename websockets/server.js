var Server = require('ws').Server;
var port = process.env.PORT || 9030;
var ws = new Server({port: port});

ws.on('connection', function(w){

  console.log("connected")
  
  w.on('message', function(msg){
    console.log('received ', msg)
    setTimeout(function(){
      w.send("pong")
    }, 1000)
  });
  
  w.on('close', function() {
    console.log('closing connection')
  });

});
