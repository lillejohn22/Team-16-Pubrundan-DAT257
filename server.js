const express = require('express')
const bodyParser = require('body-parser')
const port = 3000
const server = express()
server.listen(port)

server.use(bodyParser.json())

server.use("/js", express.static(__dirname + '/js'))
server.use("/images", express.static(__dirname + '/images'))
server.use("/css", express.static(__dirname + '/css'))
server.use("/fonts", express.static(__dirname + '/fonts'))

server.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname});
});

server.use('/voted', (request, response, next) => {
    newVoteRegistered(request,response);
    response.end("Nu är kontakten sluuuut")
})

function newVoteRegistered(request,response) {
    var queue = [];
    calculateQueue(queue);
    console.log("det funkar")
}


//Calculates the average of the latest queue entries.
function calculateQueue (queue){

    var tempQueue = queue;
    var sum = 0;
    var finalValue = 0;

    for (i = 0; i < tempQueue.length; i++){
        sum = sum + tempQueue[i];
    }

    finalValue = Math.round(sum / tempQueue.length);

    return finalValue;

}
// server.use is a middleware function that. This means that it process all types of requests.
// To limit it to a smaller subset, set the first parameter string to be the sub-url you want to process.
// To no block further middleware calls include the "next" parameter in the anonymous function that is call.
// server.use("/js", (req, res, next) => {
//     express.static(__dirname + '/js');
//     next();
// });

// Don't forget to close the connection pls :3
