
//Calculates the average of the latest queue entries.
function calculateQueue (queue){

    //const queueValue <-- The amount of people in the queue at a given time!

    var tempQueue = queue;
    var strLevels = "Short, Medium, Long";
    var resQueue = "";

    if (tempQueue.length <= 10){
        return (resQueue = strLevels.slice(0,5));
    }
    else if(tempQueue.length >=11 && <=20){
        return (resQueue = strLevels.slice(7,13));
    }
    else(tempQueue.length >=30){
        return (resQueue = strLevels.slice(15,19));
    }

    // The Old Queue function below!
    /*
    var tempQueue = queue;
    var sum = 0;
    var finalValue = 0;

    for (i = 0; i < tempQueue.length; i++){
         sum = sum + tempQueue[i];
    }

    finalValue = Math.round(sum / tempQueue.length);

    return finalValue;
    */
}