const express = require('express')
const bodyParser = require('body-parser')

const port = 3000
const server = express()

server.listen(port)

server.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname});
    //res.statusCode(200)
});

var s = 0;
server.use('/voted', (request, response, next) => {
    bodyParser.json();
    console.log(response.json().toString());
    //response.json().then(data=>{
    //    console.log(name);

    response.end("Nu är kontaktne sluuuut")
})

server.use("/js", express.static(__dirname + '/js'))
server.use("/images", express.static(__dirname + '/images'))
server.use("/css", express.static(__dirname + '/css'))
server.use("/fonts", express.static(__dirname + '/fonts'))
