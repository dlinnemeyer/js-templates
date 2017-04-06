var WebSocket = require('ws')

var connection = new WebSocket('ws://localhost:9030');

function sendPing(){
  connection.send("ping")
}

connection.onopen = function () {
  sendPing()
};

// Log errors
connection.onerror = function (error) {
  console.error('WebSocket Error ' + error);
};

// Log messages from the server
connection.onmessage = function (e) {
    console.log("received ", e.data)
    setTimeout(sendPing, 1500)
};
