const queueVoter = document.querySelector('.queueVoter');
const keys = queueVoter.querySelector('.voteButton');
var voteArray = [];
const maxArrayLength = 5;

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


        // get the buttons' id
        var x = document.getElementsByClassName("votebutton")[0].id;

        console.log(voteArray)
        changeQueueColour(x, calculateQueue(voteArray));
    }
});