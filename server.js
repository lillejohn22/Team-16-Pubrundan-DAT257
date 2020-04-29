const express = require('express')

const port = 3000
const server = express()

server.listen(port)

server.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname});
});

// server.use is a middleware function that. This means that it process all types of requests.
// To limit it to a smaller subset, set the first parameter string to be the sub-url you want to process.
// To no block further middleware calls include the "next" parameter in the anonymous function that is call.
// server.use("/js", (req, res, next) => {
//     express.static(__dirname + '/js');
//     next();
// });

server.use('/voted', (request, response, next) => {
    console.log(request.method + ' ' + request.name)
})

server.use("/js", express.static(__dirname + '/js'))
server.use("/images", express.static(__dirname + '/images'))
server.use("/css", express.static(__dirname + '/css'))
server.use("/fonts", express.static(__dirname + '/fonts'))
