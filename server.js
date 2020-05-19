const express = require('express')
const path = require('path')
const queue = require('./modules/calculateQueue')
const fs = require('fs')

const server = express()
const port = (process.env.PORT || 3000)

server.use(express.json())
server.use(express.urlencoded({extended: false}))

server.listen(port, () => console.log(`Server started on "localhost: ${port}"`))

server.get('/', (req, res) => res.sendFile('views/index.html', {root: __dirname}));

server.get('/pub-data.json', (req, res) => {
    var obj = JSON.parse(fs.readFileSync(path.join(__dirname,'pub-data.json'),'utf8'));
    res.status(200).json(obj)
    // Debugging line for pub-data.json
    // console.log(obj)

});

let requestNumber = 0;
server.use('/voted', (request, response, next) => {
    let voteObject = request.body;  // contains the entire vote object that is sent from getVote.js
    response.status(200).json(queue.updateQueue(voteObject));  // *.json(...) MUST RETURN AN OBJECT THAT CAN BE PARSED THROUGH JSON!!
    requestNumber++;
    next()
    /*
    // For debugging purposes
    console.log("A post request for '/voted' has been registered " + requestNumber++);
    console.log("Requested voteValue (stored in voteValue): " + request.body.voteValue);
    console.log(`VoteArray:  ${lastFiveVotesArray}`)
    */
})

server.get('/getQueueFor/:value',(request, response) => {
    // console.log(request.params.value)
    response.status(200).json(queue.getQueueForPub(request.params.value))
})


server.use("/js", express.static(__dirname + '/js'))
server.use("/images", express.static(__dirname + '/images'))
server.use("/css", express.static(__dirname + '/css'))
server.use("/fonts", express.static(__dirname + '/fonts'))
server.use("/views", express.static(__dirname + '/views'))