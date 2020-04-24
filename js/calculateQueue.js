
//Calculates the average of the queue entries.
function calcQueue (queue){

    var tempQueue = queue;
    var sum;
    var finalValue;

    for (i = 0; i < tempQueue.length; i++){
         var queueElem = tempQueue.shift;
         um = sum + queueElem.queueLength;
    }

    if (tempQueue.length < maxArrayLength){
      finalValue = Math.ceil(sum / tempQueue.length);
    }
    else {
      finalValue = Math.ceil(sum / maxArrayLength);
    }

    return finalValue;
}