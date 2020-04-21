

const MAXLENGTH = 5;
var queue = [];

//Add value to queue.
function addValue (value){

    if (queue.length < MAXLENGTH){
        queue.push(value);
    } else {
        queue.shift();
        queue.push(value);
    }
}

//Converts the colors to a number.
function convert (queueLength){

    var nbr;

    switch (queueLength){
        case "Red":
        nbr = 3;
        break;
        case "Yellow":
        nbr = 2;
        break;
        case "Green":
        nbr = 1;
        break;
    }
    return nbr;
}

//Calculates the average of the queue entries.
function calc (queue){

    var tempQueue = queue;
    var sum;
    var finalValue;

    while (tempQueue.length =! 0){
            sum = sum + tempQueue.pop;
    }
    finalValue = Math.ceil(sum / MAXLENGTH);

    return finalValue;
}