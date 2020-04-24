
//Calculates the average of the queue entries.
function calculateQueue (queue){

    var tempQueue = queue;
    var sum = 0;
    var finalValue = 0;

    for (i = 0; i < tempQueue.length; i++){
         sum = sum + tempQueue[i];
    }

    if (tempQueue.length < maxArrayLength){
      finalValue = Math.ceil(sum / tempQueue.length);
    }
    else {
      finalValue = Math.ceil(sum / maxArrayLength);
    }


    return finalValue;

}