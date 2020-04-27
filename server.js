const express = require('express')
const server = express()
const port = 3000

server.listen(port)

// Responds to the get request with the main website.
server.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname});
});

server.get('/index.html', function (req, res) {
    res.sendFile('./index.html', {root: __dirname});
});

// Responds with the file in the image folder.
server.get('/images/:theImage', function (req, res) {
    res.sendFile('./images/' + req.params.theImage,{root: __dirname});
});

// Responds with the file in the views folder.
server.get('/views/profile.html', function (req, res) {
    res.sendFile('./views/profile.html',{root: __dirname});
});

// Responds with the file in the js folder.
server.get('/js/:theScript', function (req, res) {
    res.sendFile('./js/' + req.params.theScript, {root: __dirname});
});

// Responds with the file in the css folder.
server.get('/css/:theStylesheet', function (req, res) {
    res.sendFile('./css/' + req.params.theStylesheet, {root: __dirname});
});

// Responds with the file in the 'fonts/raleway' folder.
server.get('/fonts/raleway/:theFont', function (req, res) {
    res.sendFile('./fonts/raleway/' + req.params.theFont, {root: __dirname});
});

// Responds with the file in the 'fonts/lato' folder.
server.get('/fonts/lato/:theFont', function (req, res) {
    res.sendFile('./fonts/lato/' + req.params.theFont, {root: __dirname});
});