const express = require('express')
// const bodyParser = require('body-parser')
// const calcQueue = require('./js/calculateQueue')

const server = express()
const port = (process.env.PORT || 3000)

server.use(express.json())
server.use(express.urlencoded({extended: false}))

server.listen(port, () => console.log(`Server started on port: ${port}`))

server.get('/', (req, res) => res.sendFile('index.html', {root: __dirname}));

var requestNumber = 0;
server.use('/voted', (request, response, next) => {
    let voteValue = getUpdatedVoteValue(request.body.voteValue);
    response.status(200).json(voteValue);
    /*
    // For debugging purposes
    console.log("A post request for '/voted' has been registered " + requestNumber++);
    console.log("Requested voteValue: " + request.body.voteValue);
    console.log(voteValue)
     */
    next()
})

/**
 * Dummy function, in future this will return correct voteValue for color change.
 * Currently returns + 1 of the button number clicked.
 * @param voteValue
 * @return {*}
 */
function getUpdatedVoteValue(voteValue) {
    var temp = new Object()
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

