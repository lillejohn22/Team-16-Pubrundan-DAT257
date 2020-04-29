const express = require('express')
const bodyParser = require('body-parser')

const server = express()
const port = (process.env.PORT || 3000)

server.use(bodyParser.json())
server.use("/js", express.static(__dirname + '/js'))
server.use("/images", express.static(__dirname + '/images'))
server.use("/css", express.static(__dirname + '/css'))
server.use("/fonts", express.static(__dirname + '/fonts'))

server.listen(port, () => console.log(`Server started on port: ${port}`))

server.get('/', (req, res) => res.sendFile('index.html', {root: __dirname}));

server.use('/voted', (request, response, next) => {
    updateQueueLength(request.body.pubName,request.body.vote);
    response.end("Vote Registered. Connection closed")
})