
//Calculates the average of the latest queue entries.
/**
 * Calculates the new queue for the pub with the corresponding queueID. The newVote is
 * the latest new vote session and voteTime is when the vote was placed and it will be
 * represented with an interval.
 * @param String queueID, int newVote, int voteTime
 * @returns int newQueueLength for the pub with queueID.
 */

function calculateQueue(queueID, newVote, voteTime){

    // Variables for every different queue option
    var shortTotal = 0;
    var mediumTotal = 0;
    var longTotal = 0;

    // 1 = short, 2 = medium, 3 = long
    for(var i=0;i<newVote.length;i++){
        if(newVote[i] === 1) {
            shortTotal++;
        }
        else if(newVote[i] === 2){
            mediumTotal++;
        }
        else if(newVote[i] === 3){
            longTotal++;
        }
    }

    // Return Pubname and queue type
    if(shortTotal > (mediumTotal || longTotal)){
        return queueID + "Short";
    }

    if(mediumTotal > (shortTotal || longTotal)){
        return queueID + "Medium";
    }

    if(longTotal > (shortTotal || mediumTotal)){
        return queueID + "Long";
    }

    if((longTotal === mediumTotal) || (longTotal === shortTotal)){
        return queueID + "Long"
    }

    if((mediumTotal === longTotal) || (mediumTotal === shortTotal)){
        return queueID + "Medium"
    }

    if((shortTotal === longTotal) || (shortTotal === mediumTotal)){
        return queueID + "Short"
    }

}