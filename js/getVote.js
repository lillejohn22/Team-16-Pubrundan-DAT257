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

        // test variable to decide which pub id to call, based on which button is clicked
        var x = keys.id;

        var id = document.getElementsByClassName("col-sm-6 col-lg-4 col-xl-3 grid-element")[x].id;


        console.log(voteArray)
        changeQueueColour(id, calculateQueue(voteArray));
    }
});
var v = 0;
const url = '/voted';
$('.btn').click(function () {
    $.post(url, {xml: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
            "<text>\n" +
            "  <para>hello world</para>\n" +
            "</text>" });
    console.log(v++);
    /* $.get(url, function(data,status){
        console.log(`${data}`)
        console.log('nu tryckte du')

    }); */

})