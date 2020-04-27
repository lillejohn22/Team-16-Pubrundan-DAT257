const express = require('express')
const path = require('path')
const server = express()
const port = 3000

server.listen(port)

server.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname});
});

// server.use("/", express.static(__dirname))
server.use("/js", express.static(__dirname + '/js'))
server.use("/images", express.static(__dirname + '/images'))
server.use("/css", express.static(__dirname + '/css'))
server.use("/fonts", express.static(__dirname + '/fonts'))


