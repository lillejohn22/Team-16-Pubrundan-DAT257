const queueVoter = document.querySelector('.queueVoter');
const keys = queueVoter.querySelector('.voteButton');

//Register key event and saves result on an array.
keys.addEventListener('click', e => {

    if (e.target.matches('button')) {
        const key = e.target;
        var voteObject = new Object();
        voteObject.voteValue = key.value;
        voteObject.date = Date.now();
        voteObject.pubName = key.parentNode.getAttribute("id");
        voteObject.url = '/voted';
        sendAndReceiveJSON(voteObject, voteObject.url, "post");
    }
});

var v = 0;

/**
 * Converts data to JSON before sending it to the url using the method specified.
 * @param {Object} data
 * @param {string} url
 * @param {string} method
 */
async function sendAndReceiveJSON(data, url, method) {
    console.log("The data that is sent " + JSON.stringify(data));

    // Sends POST request to server at url = '/voted'
    let response = await fetch(url, {
        method: method.toUpperCase(),
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    });

    // Results is parsed as JSON
    let result = await response.json();

    // DEBUG RELATED LINES
    console.log("The result data: " + result)
    console.log("The result.colorIndex: " + result.colorIndex);
    console.log("Request number: " + v++);

    // @Todo Fix the hardcoded id value in call to changeQueueColor
    changeQueueColour("bulten", result.colorIndex);

}