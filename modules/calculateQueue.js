/**
 * ...
 *
 * @author Thomas,Jesper,Ludvid,Johan
 */

pubs = new Map();

// Hack for creating "enums" in JavaScript
const QueueLength = {SHORT: 1, MEDIUM: 2, LONG: 3,};
Object.freeze(QueueLength);

function updateQueue(voteObject){
    addPubToMap(voteObject.pubName);
    return updateQueueData(voteObject);
};

/**
 * Adds the pub to the map of pubs if it isn't already added
 *
 * @param {String} pubName
 */
function addPubToMap(pubName) {
    if (pubs.get(pubName) === undefined) {
        let queueData = {name: pubName, queue: {"colorIndex": Math.floor(Math.random()*4)}, queueArray: [0, 0, 0, 0, 0], lastVoted: 0};
        pubs.set(pubName, queueData)
    }
}


/**
 * Adds the new queue data in the hashmap using the pubs pubName as the key.
 *
 * @param voteObject
 * */
function updateQueueData(voteObject){
    // Gets the queue data for the pub
    let queueData = pubs.get(voteObject.pubName);

    // Adds the queue values to the memory array
    queueData.queueArray.shift();
    queueData.queueArray.push(voteObject.voteValue);

    // Sets when the last vote was added
    queueData.lastVoted = voteObject.date;

    // Set the new Queue Value
    queueData.queue = calculateQueue(queueData.queueArray);

    // Store all the new queue data in the map
    pubs.set(voteObject.pubName, queueData);

    return queueData.queue;
}


/** Calculates the queue for the pub given the last votes as an Array
 *
 * @param queueArray
 * @returns {Object} {"colorIndex": newQueueValue}
 * */
function calculateQueue(queueArray) {

    // Variables for every different queue option
    var shortTotal = 0;
    var mediumTotal = 0;
    var longTotal = 0;

    /*
    Checks the occurrences of the votes in the array.
    Votes are represented by: 1 = short, 2 = medium, 3 = long
    */
    for (let i = 0; i < queueArray.length; i++) {
        if (queueArray[i] == QueueLength.SHORT) { // "===" breaks it because they have different types int and number.
            shortTotal++;
        } else if (queueArray[i] == QueueLength.MEDIUM) {
            mediumTotal++;
        } else if (queueArray[i] == QueueLength.LONG) {
            longTotal++;
        }
    }

    /*
    The if-statements will check which vote who has the most occurrences.
    If there is a tie, the bigger goes through.
    */
    if (shortTotal > (mediumTotal || longTotal)) {
        return {"colorIndex": QueueLength.SHORT};
    }

    else if (mediumTotal > (shortTotal || longTotal)) {
        return {"colorIndex": QueueLength.MEDIUM};
    }

    else if (longTotal > (shortTotal || mediumTotal)) {
        return {"colorIndex": QueueLength.LONG};
    }

    else if ((longTotal === mediumTotal) || (longTotal === shortTotal)) {
        return {"colorIndex": QueueLength.LONG};
    }

    else if ((mediumTotal === longTotal) || (mediumTotal === shortTotal)) {
        return {"colorIndex": QueueLength.MEDIUM};
    }

    else if ((shortTotal === longTotal) || (shortTotal === mediumTotal)) {
        return {"colorIndex": QueueLength.SHORT};
    }
}

function getQueueForPub(keyId) {
    addPubToMap(keyId);
    // console.log("getQueueForPub " + keyId + " colorIndex = " + JSON.stringify(pubs.get(keyId).queue.colorIndex))
    return pubs.get(keyId).queue.colorIndex;
}

function newRandomQueuesForAllPubs() {
    pubs.forEach((value, key, map) => {
        map.get(key).queue = {"colorIndex": Math.floor(Math.random()*4)}
    })
}

module.exports.updateQueue = updateQueue;
module.exports.getQueueForPub = getQueueForPub;
module.exports.newRandomQueuesForAllPubs = newRandomQueuesForAllPubs;