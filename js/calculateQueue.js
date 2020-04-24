
//Calculates the average of the queue entries.
function calculateQueue (queue){

    var tempQueue = queue;
    var sum = 0;
    var finalValue = 0;

    for (i = 0; i < tempQueue.length; i++){
         sum = sum + tempQueue[i];
    }

      finalValue = Math.round(sum / tempQueue.length);

    return finalValue;

}