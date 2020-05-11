allPubs = new Map();
pubNames = ["bulten", "japripps", "wijkanders", "gasquen", "cafec", "11an", "rodarummet", "ventren",
            "basen", "goldeni", "kajsabaren", "focus", "hubben21", "fortnox", "gastownospritkoket",
            "winden", "jarnvagspub", "zaloonen", "pignwhistle"]

// ENUM hax in javascript
const QueueLength = {SHORT: 1, MEDIUM: 2, LONG: 3,}; Object.freeze(QueueLength);

// -----------------------------------------------------------------------------------------------------------

module.exports = function updateQueue(voteObject){
    addPubToMap(voteObject);
    return updateQueueData(voteObject);

}

// Adds the pub to the map of pubs if it isn't already added
function addPubToMap(voteObject) {
    if(allPubs.get(voteObject.pubName) === undefined) {
        let queueData = {name: voteObject.pubName, queue: {"colorIndex": 0}, queueArray: [0, 0, 0, 0, 0], lastVoted: 0}
        allPubs.set(voteObject.pubName, queueData)
    }
}
/** Adds the new queue data in the hashmap using the pubs pubName as the key. */
function updateQueueData(voteObject){
    // Gets the queue data for the pub
    let queueData = allPubs.get(voteObject.pubName);

    // Adds the queue values to the memory array
    queueData.queueArray.shift();
    queueData.queueArray.push(voteObject.voteValue);

    // Sets when the last vote was added
    queueData.lastVoted = voteObject.date;

    // Set the new Queue Value
    queueData.queue = calculateQueue(queueData.queueArray)

    // Store all the new queue data in the map
    allPubs.set(voteObject.pubName, queueData)

    return queueData.queue;
}
/** Calculates the queue for the pub given the last votes as an Array
 * @returns {Object} {"colorIndex": newQueueValue} */
function calculateQueue(queueArray) {

    // Variables for every different queue option
    var shortTotal = 0;
    var mediumTotal = 0;
    var longTotal = 0;
    /*
    Checks the occurrences of the votes in
    the array. Votes are represented by:
    1 = short, 2 = medium, 3 = long
    */
    for (var i = 0; i < queueArray.length; i++) {
        if (queueArray[i] == QueueLength.SHORT) {
            shortTotal++;
        } else if (queueArray[i] == QueueLength.MEDIUM) {
            mediumTotal++;
        } else if (queueArray[i] == QueueLength.LONG) {
            longTotal++;
        }
    }

    /*
    The if-statements will check which
    vote who has the most occurrences. If
    there is a tie, the bigger goes through.
    */
    if (shortTotal > (mediumTotal || longTotal)) {
        return {"colorIndex": QueueLength.SHORT};
    }

    if (mediumTotal > (shortTotal || longTotal)) {
        return {"colorIndex": QueueLength.MEDIUM};
    }

    if (longTotal > (shortTotal || mediumTotal)) {
        return {"colorIndex": QueueLength.LONG};
    }

    if ((longTotal === mediumTotal) || (longTotal === shortTotal)) {
        return {"colorIndex": QueueLength.LONG};
    }

    if ((mediumTotal === longTotal) || (mediumTotal === shortTotal)) {
        return {"colorIndex": QueueLength.MEDIUM};
    }

    if ((shortTotal === longTotal) || (shortTotal === mediumTotal)) {
        return {"colorIndex": QueueLength.SHORT};
    }
}