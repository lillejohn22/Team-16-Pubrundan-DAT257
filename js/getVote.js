const queueVoter = document.querySelector('.queueVoter');
const keys = queueVoter.querySelector('.voteButton');

const maxArrayLength = 5;

var v = 0;
var voteArray = [];
const url = '/voted';

//Register key event and saves result on an array.
keys.addEventListener('click', e => {

    if (e.target.matches('button')) {
        const key = e.target;
        const keyContent = key.value;

        if (voteArray.length < maxArrayLength) {
            let vote = parseInt(keyContent);
            voteArray.push(vote);
        }
        else {
            voteArray.shift();
            let vote = parseInt(keyContent);
            voteArray.push(vote)
        }

        var vote = keyContent;
        var dateTime = Date.now();
        var pubName = key.parentNode.getAttribute("id");
        var jsonString = JSON.stringify({vote, dateTime, pubName});

        console.log(jsonString)

        $.ajax({
            type: "POST",
            url: url,
            data: jsonString,
            contentType: 'application/json',
            success: console.log("Request worked!")
        })
        console.log(v++);
    }
});