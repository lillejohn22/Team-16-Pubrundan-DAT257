/**
 * Enables the ActionListeners for the "voteButton" class (The vote buttons).
 * This function is also responsible for sending the button data as JSON to the server.
 */
$(window).on('load', function() {
    let keys = document.getElementsByClassName("voteButton");

    for (let i = 0; i < keys.length; i++) {
       keys[i].addEventListener('click', e => {

        if (e.target.matches('button')) {
            const key = e.target;
            var voteObject = {}; // Apparently makes a new object in JavaScript

            voteObject.voteValue = key.value;
            voteObject.date = Date.now();
            voteObject.pubName = key.parentNode.getAttribute("id").replace("Buttons", "");
            voteObject.url = '/voted';

            // DEBUG PRINTS
            // console.log("Pressed: " + voteObject.pubName + '\n');
            // console.log(voteObject.pubName)
            // console.log(buttonid + '\n');

            sendAndReceiveJSON(voteObject, voteObject.url, "post");
            }
        })
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
    changeQueueColour(data.pubName, result.colorIndex);

    // DEBUG RELATED LINES
    // console.log("The data that is sent " + JSON.stringify(data));
    // console.log("The result data: " + result)
    // console.log("The result.colorIndex: " + result.colorIndex);
    // console.log("Request number: " + v++);
}