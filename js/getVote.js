const queueVoter = document.querySelector('.queueVoter');
const keys = queueVoter.querySelector('.voteButton');
var voteArray = [];
var queueValue = 0;
const maxArrayLength  = 5;


keys.addEventListener('click', e => {

    if (e.target.matches('button')) {
        const key = e.target;
        const keyContent = key.value;

        if (voteArray.length < maxArrayLength) {
            let vote = {queueLength: parseInt(keyContent) , time: Date.now()};
            voteArray.push(vote);
        }
        else {
            voteArray.shift();
            let vote = {queueLength: parseInt(keyContent) , time: Date.now()};
            voteArray.push(vote)

        }
        console.log(voteArray)

        queueValue = calcQueue(voteArray);

    }
});