const express = require('express')
const path = require('path')
// const bodyParser = require('body-parser')
const calcQueue = require('./js/calculateQueue')
var fs = require('fs');

const server = express()
const port = (process.env.PORT || 3000)

server.use(express.json())
server.use(express.urlencoded({extended: false}))

server.listen(port, () => console.log(`Server started on "localhost: ${port}"`))

server.get('/', (req, res) => res.sendFile('index.html', {root: __dirname}));
server.get('/pub-data.json', (req, res) => {
    var obj = JSON.parse(fs.readFileSync(path.join(__dirname,'pub-data.json'),'utf8'));
    res.status(200).json(obj)
    console.log(obj)

});

var requestNumber = 0;
var lastFiveVotesArray = [];
server.use('/voted', (request, response, next) => {
    let voteValue = request.body.voteValue;
    updateQueueArray(voteValue);
    // @TODO Find better viable shit thing updatedVoteValueToBePassedToWebsite
    let updatedVoteValueToBePassedToWebsite = getUpdatedVoteValue(voteValue);

    response.status(200).json(updatedVoteValueToBePassedToWebsite);
    requestNumber++;


    calcQueue.calculateQueue(2,1,123)
    /*
    // For debugging purposes
    console.log("A post request for '/voted' has been registered " + requestNumber++);
    console.log("Requested voteValue (stored in voteValue): " + request.body.voteValue);
    console.log(`VoteArray:  ${lastFiveVotesArray}`)
    */

    next()
})

function updateQueueArray(vote) {
    if(lastFiveVotesArray.length === 5) {
        lastFiveVotesArray.shift();
    }
    lastFiveVotesArray.push(vote);
}

/**
 * Dummy function, in future this will return correct voteValue for color change.
 * Currently returns + 1 of the button number clicked.
 * @param voteValue
 * @return {*}
 */
function getUpdatedVoteValue(voteValue) {
    var temp = {}
    switch(parseInt(voteValue)) {
        case 1:
            temp.colorIndex = parseInt(voteValue) + 1;
            break;
        case 2:
            temp.colorIndex = parseInt(voteValue) + 1;
            break;
        case 3:
            temp.colorIndex = 1;
            break;
        default:
            temp.colorIndex = 404;
            console.log("ERROR: getUpdatedVoteValue entered default case!")
    }
    return temp;
}

server.use("/js", express.static(__dirname + '/js'))
server.use("/images", express.static(__dirname + '/images'))
server.use("/css", express.static(__dirname + '/css'))
server.use("/fonts", express.static(__dirname + '/fonts'))