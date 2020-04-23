
//Calculates the average of the queue entries.
function calc (queue){

    var tempQueue = queue;
    var sum;
    var finalValue;

    while (tempQueue.length =! 0){
            sum = sum + tempQueue.pop;
    }
    finalValue = Math.ceil(sum / maxArrayLength);

    return finalValue;
}

var queueValue = calc(voteArray);